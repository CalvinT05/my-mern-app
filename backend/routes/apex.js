/*
 * 
 */

'use strict'; // Strict mode

// Imports
const express = require('express');
const router = express.Router();

const {
    getApexProfile
} = require('../controllers/apex-controller');

// API routes
router.get('/profile/:platform/:platformUserIdentifier', getApexProfile);

// Export routes to other parts of program
module.exports = router;
