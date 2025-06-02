/*
 * 
 */

'use strict'; // Strict mode

// Imports
const express = require('express');
const router = express.Router();
const {getAccountByRiotId} = require('../controllers/riot-controller');

// API routes
router.get('/account/:gameName/:tagLine', getAccountByRiotId);

// Export routes to other parts of program
module.exports = router;
