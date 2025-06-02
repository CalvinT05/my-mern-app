/*
 * Contains the Riot API routing logic for:
 * getPuuidByIGN
 * 
 */

'use strict'; // Strict mode

// Imports
const axios = require('axios'); // Imports Axios library

/*
 * Notes:
 * 
 * async (req, res): function awaits for operation (API to respond)
 * 
 * req          request
 *  .params     route parameters (e.g. /user/:id)
 *  .query      query string (e.g. /search?term=lol)
 *  .body       POST data (requires express.json())
 *  .headers    HTTP headers
 * 
 * res          response
 *  .send()     send a string or JSON
 *  .json()     send JSON (auto sets headers)
 *  .status(x)  set HTTP status code to 'x'
 *  .redirect() redirect to another URL
 * 
 */

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