'use strict';

// Imports
const axios = require('axios');

// Get CS:GO profile data
exports.getCsgoProfile = async (req, res) => {
    // Debugging: Print request in console
    console.log('Requesting CS:GO profile data:');

    // Extract Steam ID from request parameters
    const platform = req.params.platform || 'steam'; // Default to Steam
    const platformUserIdentifier = req.params.platformUserIdentifier;
    try {
        // Construct request and get response
        const response = await axios.get(
            `https://public-api.tracker.gg/v2/csgo/standard/profile/${platform}/${platformUserIdentifier}`,            {
                headers: {
                    "TRN-Api-Key": process.env.TRN_API_KEY, // Securely store API key in environment variables
                    "Accept": "application/json",
                    "Accept-Encoding": "gzip"
                }
            }
        );

        // Debugging: Print response in console
        console.log('API response:', JSON.stringify(response.data, null, 2));

        // Send back data to caller in JSON
        res.json(response.data);
    } catch (err) {
        // Handle errors gracefully
        res.status(err.response?.status || 500).json({ error: err.message });
    }
};
