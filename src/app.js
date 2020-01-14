require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')

const UsersRouter = require('./users/users-router')
const FavoritesRouter = require('./favorites/favorites-router')
const InventoryRouter = require('./inventory/inventory-router')
const rebrickable = require('./rebrickable')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/api/users', UsersRouter)
app.use('/api/favorites', FavoritesRouter)
app.use('/api/inventory', InventoryRouter)
app.use('/api/rebrickable', rebrickable)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

module.exports = app