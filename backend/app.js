/*
 * 
 */

'use strict'; // Strict mode

// Imports
const express = require('express'); // import express
const cors = require('cors'); // import 

// Import routes
const leagueRoutes = require('./routes/league');
const csgoRoutes = require('./routes/csgo');
const apexRoutes = require('./routes/apex');
const owRoutes = require('./routes/ow');


// Middleware
const app = express(); // Create an Express application instance
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // optional: parses JSON bodies

// Mount routes
app.use('/api/league', leagueRoutes);
app.use('/api/csgo', csgoRoutes);
app.use('/api/apex', apexRoutes);
app.use('/api/ow', owRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;