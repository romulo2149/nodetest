"use strict";

//#region Imports

// Node modules
import 'dotenv/config'
import express from 'express';

// Custom modules
import * as logger from './log/log.js'
import * as db from './database/database.js'
import routes from './routes/routes.js'

//#endregion

const app = express()

// Configure app to read JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(routes);

// Bind the connection to the specified port
app.listen(process.env.port, () => {
  logger.info('Server running in port: ' + process.env.port)
});

// Connect to database
db.connect();