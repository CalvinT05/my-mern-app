/*
 * 
 */

'use strict'; // Strict mode

// Imports
const express = require('express'); // import express
const cors = require('cors'); // import 
const riotRoutes = require('./routes/riot'); //import


// Middleware
const app = express();
app.use(cors());
app.use(express.json()); // optional: parses JSON bodies

// Mount routes
app.use('/api/riot', riotRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;