/*
 * 
 */

'use strict'; // Strict mode

// Imports
const express = require('express');
const router = express.Router();

const {
    getCsgoProfile
} = require('../controllers/csgo-controller');

// API routes
router.get('/profile/:platform/:platformUserIdentifier', getCsgoProfile);

// Export routes to other parts of program
module.exports = router;
