/*
 * 
 */

'use strict'; // Strict mode

// Imports
const express = require('express');
const router = express.Router();

const {
    getAccountByRiotID,
    getSummonerByPUUID
} = require('../controllers/riot-controller');

// API routes
router.get('/account/:gameName/:tagLine', getAccountByRiotID);
router.get('/summoner/:PUUID', getSummonerByPUUID);

// Export routes to other parts of program
module.exports = router;
