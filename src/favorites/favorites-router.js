const express = require('express')
const favoritesService = require('./favorites-service')
const path = require('path')
const { requireAuth } = require('../middleware/jwt-auth')

const favoritesRouter = express.Router()
const jsonParser = express.json()

const serializeFavorite = favorite => ({
  inventory_id: favorite.favorites_id,
  user_id: favorite.user_id,
  set_name: favorite.set_name,
  image_url: favorite.image_url,
  build_url: favorite.build_url
})

  // Get all favorites belonging to a user, by user_id
favoritesRouter
  .route('/:user_id')
  .all(requireAuth)
  .all((req, res, next) => {
    favoritesService
  .favoritesByUser(
      req.app.get('db'),
      req.params.user_id
    )
      .then(favorites => {
        res.favorites = favorites
        next() 
      })
      .catch(next)
  })
  .get((req, res) => {
    res.json(res.favorites)
  })

// Add favorite
favoritesRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    favoritesService
  .getAllFavorites(knexInstance)
      .then(favorites => {
        res.json(favorites.map(serializeFavorite))
      })
      .catch(next)
  })
  .post(requireAuth, jsonParser, (req, res, next) => {
    const { set_name, image_url, build_url } = req.body;
    const newFavorite = { set_name, image_url, build_url };

    for (const [key, value] of Object.entries(newFavorite)) {
      if (value == null) {
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })
      }
    }

    newFavorite.user_id = req.body.user_id
      
    favoritesService
      .addFavorite(
        req.app.get('db'),
        newFavorite
      )
        .then(favorite => (
          res 
            .status(201)
            .json(serializeFavorite(favorite))
        ))
        .catch(next)
  })
  
  // Delete favorite by favorites_id
  favoritesRouter
    .route('/delete/:favorites_id')
    .all(requireAuth)
    .delete((req, res, next) => {
      favoritesService
    .deleteFavorite(
      req.app.get('db'),
      req.params.favorites_id
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
    })

module.exports = favoritesRouter