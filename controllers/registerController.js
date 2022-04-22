"use strict";

import user from '../models/user.js'

var registerNewUser = async function(request, response)
{
    const newUser = new user({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    });

    try {
        const savedUser = await newUser.save()
        response.json({
            info: "User correctly saved!",
            data: savedUser
        });
    } catch (error) {
        response.status(400).json({error});
    }
}

export { registerNewUser };