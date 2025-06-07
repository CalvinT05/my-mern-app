/*
 * 
 */

'use strict'; // Strict mode

// Imports
const express = require('express');
const router = express.Router();

// Import controller functions from league-controller.js
const {
    getAccountByRiotId,
    getSummonerByPuuid,
    getRankByPuuid
} = require('../controllers/league-controller');

// API routes
router.get('/account/:gameName/:tagLine', getAccountByRiotId);
router.get('/summoner/:PUUID', getSummonerByPuuid);
router.get('/rank/:PUUID', getRankByPuuid);

// Export routes to other parts of program
module.exports = router;
