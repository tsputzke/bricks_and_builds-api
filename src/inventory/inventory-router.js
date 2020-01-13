const express = require('express')
const inventoryService = require('./inventory-service')
const path = require('path')
const { requireAuth } = require('../middleware/jwt-auth')

const inventoryRouter = express.Router()
const jsonParser = express.json()

const serializeItem = item => ({
  inventory_id: item.inventory_id,
  user_id: item.user_id,
  set_name: item.set_name,
  image_url: item.image_url,
  build_url: item.build_url
})

  // Get all items belonging to a user, by user_id
inventoryRouter
  .route('/:user_id')
  .all(requireAuth)
  .all((req, res, next) => {
    inventoryService
  .itemsByUser(
      req.app.get('db'),
      req.params.user_id
    )
      .then(items => {
        res.items = items
        next() 
      })
      .catch(next)
  })
  .get((req, res) => {
    res.json(res.items)
  })

// Add favorite
inventoryRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    inventoryService
  .getInventory(knexInstance)
      .then(items => {
        res.json(items.map(serializeItem))
      })
      .catch(next)
  })
  .post(requireAuth, jsonParser, (req, res, next) => {
    const { set_name, image_url, build_url } = req.body;
    const newItem = { set_name, image_url, build_url };

    for (const [key, value] of Object.entries(newItem)) {
      if (value == null) {
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })
      }
    }

    newItem.user_id = req.body.user_id
      
    inventoryService
      .addItem(
        req.app.get('db'),
        newItem
      )
        .then(item => (
          res 
            .status(201)
            .json(serializeItem(item))
        ))
        .catch(next)
  })
  
  // Delete item by inventory_id
  inventoryRouter
    .route('/delete/:inventory_id')
    .all(requireAuth)
    .delete((req, res, next) => {
      inventoryService
    .deleteItem(
      req.app.get('db'),
      req.params.inventory_id
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
    })

module.exports = inventoryRouter