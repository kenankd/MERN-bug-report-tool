import jwt from 'jsonwebtoken'
import { SECRET } from '../constants.js';

const verifyJwtToken = (req,res,next) => {
    const token = req.headers('x-access-token');
    try{
        const decoded = jwt.verify(token,SECRET)
        console.log(decoded);
        if(decoded) next()

    } catch(e){
        return res.status(401).send('Unauthorized');
    }
}

export default verifyJwtToken;