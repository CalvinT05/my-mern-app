/*
 * 
 */

'use strict'; // strict mode

// Imports
require('dotenv').config(); // imports config
const app = require('./app'); // imports app

const PORT = process.env.PORT; // port set from config

// Run server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});