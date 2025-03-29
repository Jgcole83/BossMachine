const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');


app.use(express.json()); // For parsing JSON data
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data
app.use(cors()); // Enable CORS for all routes
app.use(morgan('dev')); // Log requests to the console


/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Add middware for parsing request bodies here:


// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');


// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:

}
