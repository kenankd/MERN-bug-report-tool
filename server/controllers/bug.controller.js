import Bug from '../models/Bug.model.js'
import User from '../models/User.model.js'
import {ROLES}  from '../constants.js';

export const getAllBugs = async(req,res) => {
    const {role,id} = req.user;
    //assignedTo - developer
    //reportedBy - qa
    try{
        let bugs = [];
        if(role === ROLES.DEVELOPER)
            bugs = await Bug.find({assignedTo : id})
        else if(role === ROLES.QA)
            bugs = await Bug.find({reportedBy : id})
        res.status(201).send(bugs);
    } catch (e){
        console.log(e);
        res.status(500).send('Something went wrong!');
    }
}

export const createBug = async(req,res)=>{
    try{
        const bug = new Bug(req.body);
        const result = await bug.save();
        res.status(200).send(result);
    } catch(e){
        res.status(500).send('Something went wrong!');
    }
}

export const changeStatus = async(req,res) => {
    const {completed} = req.body;
    const {id} = req.params;
    try{
        const result = await Bug.findOneAndUpdate({_id:id}, {completed: completed});
        res.status(200).send("Succesfully changed status!");
    } catch(e){
        res.status(500).send("Something went wrong!");
    }
}