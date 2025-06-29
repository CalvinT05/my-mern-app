/*
 * Contains the Riot API routing logic for:
 * getRankByPuuid,
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
 * Get puuid by Riot ID
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

/*
 * Get summoner profile by PUUID
 * Inputs: PUUID
 * Returns: .json containing account ID, icon, revision date, summoner ID, name, summoner level
 * 
 */
exports.getSummonerByPuuid = async (req, res) => { // Define get request route
    // Debugging: Print request in console
    console.log('Requesting summoner by PUUID:');
    
    // Request parameters
    const puuid = req.params.puuid;

    // Try to fetch data through API
    try {
        // Contruct request and get response
        const response = await axios.get(
            // Formatted API url to include parameters
            `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
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

/*
 * Get ranked stats
 * Inputs: PUUID
 * Returns: .json containing rank stats
 * 
 */
exports.getRankByPuuid = async (req, res) => { // Define get request route
    // Debugging: Print request in console
    console.log('Requesting rank by PUUID:');
    
    // Request parameters
    const puuid = req.params.puuid;

    // Try to fetch data through API
    try {
        // Contruct request and get response
        const response = await axios.get(
            // Formatted API url to include parameters
            `https://na1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`,
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

/*
 * Get champion mastery stats
 * Inputs: PUUID
 * Returns: .json containing champion mastery stats
 * 
 */
exports.getMasteryByPuuid = async (req, res) => { // Define get request route
    // Debugging: Print request in console
    console.log('Requesting rank by PUUID:');
    
    // Request parameters
    const puuid = req.params.puuid;

    // Try to fetch data through API
    try {
        // Contruct request and get response
        const response = await axios.get(
            // Formatted API url to include parameters
            `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`,
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

/*
 * Get match history IDs
 * Inputs: PUUID, optional - startTime, endTime, queue, type, start, count
 * Returns: .json containing list of match IDs
 * 
 */
exports.getMatchIdsByPuuid = async (req, res) => {};

/*
 * Get match by match ID
 * Inputs: Match ID
 * Returns: .json containing match details
 * 
 */
exports.getMatchByMatchId = async (req, res) => {};