import bcrypt from 'bcrypt'

import {SALT_ROUNDS} from '../constants.js'
import User from '../models/User.model.js'

export const register = async (req,res) => {
    const{password,...data} = req.body;
    try{
    const hashedPassword = await bcrypt.hash(password,SALT_ROUNDS);
    const userToSave = new User({...data,password:hashedPassword});
    const result = await userToSave.save();
    res.status(201).send("User created!");
    }
    catch(e){
        res.status(500).send("Could not create user");
    }
}

export const login = (req,res) => {
    res.status(201).send('login route');
}