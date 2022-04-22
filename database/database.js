"use strict";

import * as logger from '../log/log.js'
import mongoose from 'mongoose'
import 'dotenv/config'

const uri = 'mongodb+srv://'+ process.env.user +':'+
            process.env.password +'@cluster0.ip3zl.mongodb.net/'+
            process.env.databaseName +'?retryWrites=true&w=majority'


export function connect()
{
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      logger.info('Database connection succeded')
    })
    .catch((e) => {
      logger.error('Database error: ', e)
  })
}