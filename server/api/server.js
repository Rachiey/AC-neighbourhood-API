const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const neighbourhoodRoutes = require('./controllers/neighbourhood.js')
const housesRoutes = require('./controllers/houses')
const addressesRoutes = require('./controllers/addresses')

server.use('/neighbourhood', neighbourhoodRoutes)
server.use('/houses', housesRoutes)
server.use('/addresses', addressesRoutes)

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Welcome to the the Neighbourhood API. Please use /neighbourhood to discover our neighbourhood.'))

module.exports = server
