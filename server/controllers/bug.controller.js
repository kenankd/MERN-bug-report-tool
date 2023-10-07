import Bug from '../models/Bug.model.js'

export const getAllBugs = async(req,res) => {
    try{
       const bugs = await Bug.find();
       res.status(201).send(bugs);
    } catch(e){
        console.log(e);
        res.status(500).send('Something went wrong!' + e);

    }
}

export const createBug = async(req,res)=>{
    try{
        const bug = new Bug(req.body);
        await bug.save();
        res.status(200).send('Bug created');
    } catch(e){
        res.status(500).send('Something went wrong!');
    }
}