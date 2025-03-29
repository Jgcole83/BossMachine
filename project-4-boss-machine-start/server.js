const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const apiRouter = require('./server/api'); // Import the apiRouter once

app.use(express.json()); // For parsing JSON data
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data
app.use(morgan('dev')); // Log requests to the console

// CORS settings
app.use(cors({
  origin: '*',  // Allow all origins
  methods: '*',  // Allow all HTTP methods
  allowedHeaders: '*' // Allow all headers
}));

// Use the apiRouter for routes starting with /api
app.use('/api', apiRouter);  // This will now route API requests to your defined routes

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
