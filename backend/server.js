/*
 * 
 */

'use strict'; // strict mode

const app = require('./app'); // imports app
const { port, connectDB } = require('./config'); // imports config

// Connect to MongoDB
connectDB();

// Run server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});