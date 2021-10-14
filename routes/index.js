const express = require('express');

//import our modular routers for /notes and /api/notes
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;