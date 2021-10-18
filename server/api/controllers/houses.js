const express = require('express');
const router = express.Router();

const Houses = require('../models/houses')

//houses index route
router.get('/', async (req, res) => {
    try {
        const houses = await Houses.all
        res.json({houses})
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports = router;