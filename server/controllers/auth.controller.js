import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import {SALT_ROUNDS,SECRET} from '../constants.js'
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
    try {
        const user = await getUserByEmail(email);
        const match = bcrypt.compare(password,user.password);
    if(match){
        const token = jwt.sign({
            id:user._id.toString(),
            email: user.email,
            role: user.role
        }, SECRET, {expiresIn:3600});
        res.status(200).send({token});
    }
    else{
        res.status(404).send('Invalid credentials');
    }
    } catch (error) {
        res.status(500).send('Something went wrong!');
    }
        
}