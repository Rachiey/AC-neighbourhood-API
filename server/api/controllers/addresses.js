const express = require('express');
const router = express.Router();

const Addresses = require('../models/addresses')

//addresses index route
router.get('/', async (req, res) => {
    try {
        const addresses = await Addresses.all
        res.json({addresses})
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports = router;