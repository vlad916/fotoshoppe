const express = require('express');
const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config')
const app = express();

// routes
// require("./startup/logging")();
// require("./startup/cors")(app);
// require("./startup/routes")(app);
// require("./startup/db")();
// require("./startup/config")();
// require("./startup/validation")();



// Mongodb connection
const PORT = process.env.PORT || config.get('port');
const server = app.listen(PORT, () => 
    winston.info(`Listening on PORT ${PORT}...`)
);

module.exports = server; 
