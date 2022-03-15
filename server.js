const express = require('express');
const path = require('path');
const api = require('./routes/index.js')

// Server
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/api', api);
app.use(express.static('public'));

// notes page
app.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'))
})

// index page
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

// Server
app.listen(PORT, () => {
  console.log(`APP running on: http://localhost:${PORT}`);
});