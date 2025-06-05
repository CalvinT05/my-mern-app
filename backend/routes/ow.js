/*
 * 
 */

'use strict'; // Strict mode

// Imports
const express = require('express');
const router = express.Router();

const {
    getOWProfile
} = require('../controllers/ow-controller');

// API routes
router.get('/stats/:platform/:region/:battletag', getOWProfile);

// Export routes to other parts of program
module.exports = router;
