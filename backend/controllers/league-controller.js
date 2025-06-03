/*
 * Contains the Riot API routing logic for:
 * getAccountByRiotId
 * 
 */

'use strict'; // Strict mode

// Imports
const axios = require('axios'); // Imports Axios library

/*
 * Get puuid
 * Inputs: game name, tag line
 * Returns: .json containing name, tag, puuid
 * 
 */
exports.getAccountByRiotId = async (req, res) => { // Define get request route
    // Debugging: Print request in console
    console.log('Requesting account by Riot ID:');
    
    // Request parameters
    const gameName = req.params.gameName;
    const tagLine = req.params.tagLine;

    // Try to fetch data through API
    try {
        // Contruct request and get response
        const response = await axios.get(
            // Formatted API url to include parameters
            `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
            // Header: API key
            {headers: {"X-Riot-Token": process.env.RIOT_API_KEY}}
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