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
// ex: http://localhost:5000/api/ow/stats/pc/us/Domekologe-2110/

// Export routes to other parts of program
module.exports = router;
