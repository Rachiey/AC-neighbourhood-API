const express = require('express');
const router = express.Router();

const Neighbourhood = require('../models/neighbourhood')

//neighbourhood index route
router.get('/', async (req, res) => {
    try {
        const neighbourhood = await Neighbourhood.all
        res.json({neighbourhood})
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports = router;