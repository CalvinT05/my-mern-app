/*
 * 
 */

'use strict'; // Strict mode

// Imports
const express = require('express');
const router = express.Router();

const {
    getAccountByRiotID,
    getSummonerByPUUID,
    getRankByPUUID,
} = require('../controllers/league-controller');

// API routes from league-controller.js
router.get('/account/:gameName/:tagLine', getAccountByRiotID);
router.get('/summoner/:PUUID', getSummonerByPUUID);
router.get('/rank/:PUUID', getRankByPUUID);

// Export routes to other parts of program
module.exports = router;
