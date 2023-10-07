import bcrypt from 'bcrypt'

import {SALT_ROUNDS} from '../constants.js'
import User from '../models/User.model.js'
import { getUserByEmail } from '../dao/user.dao.js'

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

export const login = async(req,res) => {
    const {email,password} = req.body;
    const user = await getUserByEmail(email);
    console.log(user);
    const match = await bcrypt.compare(password,user.password);
    if(match){
        res.status(200).send('Login successful');
    }
    else{
        res.status(404).send('Invalid credentials');
    }
}