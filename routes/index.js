const express = require('express');
// Import our modular routers for notes
const noteRoute = require('./notes');

const app = express();

app.use('/notes', noteRoute);

module.exports = app;