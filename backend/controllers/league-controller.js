/*
 * Contains the Riot API routing logic for:
 * getRankByPUUID
 * 
 */

'use strict'; // Strict mode

// Imports
const axios = require('axios'); // Imports Axios library

/*
 * Get rank stats
 * Inputs: PUUID
 * Returns: .json containing rank stats
 * 
 */
exports.getRankByPUUID = async (req, res) => { // Define get request route
    // Debugging: Print request in console
    console.log('Requesting rank by PUUID:');
    
    // Request parameters
    const PUUID = req.params.PUUID;

    // Try to fetch data through API
    try {
        // Contruct request and get response
        const response = await axios.get(
            // Formatted API url to include parameters
            `https://na1.api.riotgames.com/lol/league/v4/entries/by-puuid/${PUUID}`,
            // Header: API key
            {headers: {'X-Riot-Token': process.env.RIOT_API_KEY}}
        );

        // Debugging: Print response in console
        console.log('API response:', JSON.stringify(response.data, null, 2));

        // Send back data to caller in JSON
        res.json(response.data);
    } catch (err) {
        // Send back error/response code to caller if failed
        res.status(err.response?.status || 500).json({error: err.message});
    }
};