/*
 * Configurations
 */

const { connect, mongo } = require('mongoose');

require('dotenv').config(); // Loads .env (environment variables)

const connectDB = require('./db'); // Import database connection

// Contains environment constants
module.exports = {
  riotApiKey: process.env.RIOT_API_KEY,
  port: process.env.PORT,
  trnApiKey: process.env.TRN_API_KEY,
  mongoUri: process.env.MONGO_URI,
  connectDB, // Export the database connection function
};