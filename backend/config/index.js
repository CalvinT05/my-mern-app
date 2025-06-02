/*
 * Configurations
 */

require('dotenv').config(); // Loads .env (environment variables)

// Contains environment constants
module.exports = {
  riotApiKey: process.env.RIOT_API_KEY,
  port: process.env.PORT,
};