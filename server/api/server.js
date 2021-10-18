const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const neighbourhoodRoutes = require('./controllers/neighbourhood.js')
const housesRoutes = require('./controllers/houses')
const addressRoutes = require('./controllers/address')

server.use('/neighbourhood', neighbourhoodRoutes)
server.use('/houses', housesRoutes)
server.use('/address', addressRoutes)

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Welcome to the the Neighbourhood API. Please use /neighbourhood to discover our neighbourhood.'))

module.exports = server
