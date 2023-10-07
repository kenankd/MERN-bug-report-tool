import Bug from '../models/Bug.model.js'
import User from '../models/User.model.js'

export const getAllBugs = async(req,res) => {
    try{
       const bugs = await Bug.find();
       res.status(201).send(bugs);
    } catch(e){
        console.log(e);
        res.status(500).send('Something went wrong!' + e);

    }
    
}