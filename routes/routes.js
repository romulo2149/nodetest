"use strict";

import express from 'express' 
import { registerNewUser } from '../controllers/registerController.js'

var router = express.Router();

// Index routes

router.get('/', function (request, response)
{
    response.json({ message: 'Hola Mundo desde GitHub!!!' })
})

// Auth routes

router.post('/register', registerNewUser);

export default router;