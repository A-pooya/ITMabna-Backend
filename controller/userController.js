const User = require("../model/userModel");
const bcrypt = require('bcryptjs');

exports.HandleSignUp = async (req ,res , next) => {
    try {
        const {email , password , name } = req.body;
        console.log(req.body);
        const user = await User.findOne({email});
        if(user){
         return res.json({message:"this email have been registered before"})
        }
        const hash = await bcrypt.hash(password , 10);
        await User.create({
            name,
            email,
            password:hash
        })
        res.json({message:"thank you for your register"})
    } catch (err) {
        console.log(err);
        const error = new Error("there is a problem in server. please wait")
        error.statusCode = 400;
        next(error);
    }
}

exports.HandleSignIn = async (req ,res , next) => {
    try {
        const {email , password} = req.body;
        
        const user = await User.findOne({email});
        if(!user){
            return res.json({message:"please register first"})
        }
        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
            const error = new Error("email or password is not correct")
            error.statusCode = 400;
            throw error
        }
        res.json({message:"welcome to IT Mabna"});

    } catch (err) {
        console.log(err);
        next(err)
    }
}