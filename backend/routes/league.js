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
    getRankByPuuid,
    getMasteryByPuuid,
    getMatchIdsByPuuid,
    getMatchByMatchId
} = require('../controllers/league-controller');

// API routes
router.get('/account/:gameName/:tagLine', getAccountByRiotId);
router.get('/summoner/:puuid', getSummonerByPuuid);
router.get('/rank/:puuid', getRankByPuuid);
router.get('/mastery/:puuid', getMasteryByPuuid);
router.get('/match-ids/:puuid', getMatchIdsByPuuid);
router.get('/match/:matchId', getMatchByMatchId);


// Export routes to other parts of program
module.exports = router;
