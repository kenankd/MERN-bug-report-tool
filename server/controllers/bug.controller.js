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