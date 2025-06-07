'use strict';

// Imports
const axios = require('axios');

// Get Apex profile data
exports.getOWProfile = async (req, res) => {
    // Debugging: Print request in console
    console.log('Requesting Overwatch profile data:');

    // Extract Steam ID from request parameters
    const platform = req.params.platform || 'pc'; // Default to PC
    const region = req.params.region || 'us';
    const battletag = req.params.battletag;
    try {
        // Construct request and get response
        const response = await axios.get(
            `https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/complete`
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
