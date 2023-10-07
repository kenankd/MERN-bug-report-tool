import User from '../models/User.model.js'

export const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({email : email})
        return user;
    } catch (error) {
        return null;
    }
}