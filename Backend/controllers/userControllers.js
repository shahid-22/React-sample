const bcrypt =require('bcrypt')
const User=require('../models/userModels')
const jwt = require('jsonwebtoken');
module.exports={
    userSignup: async (req ,res) => {
        try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
            const newUser = new User(req.body);
            await newUser.save();
            res.send({
                success: true,
                message: "User created Succesfully"
            });
        } catch (err) {
            res.send({
                success: false,
                message: err.message
            })
        }
    },
    userlogin:async(req,res)=>{
        try{
          const user = await User.findOne({ email: req.body.email }).exec();
          if(user){
            const validaPassword = await bcrypt.compare(req.body.password, user.password);
            if(!validaPassword){
                throw new Error("Invalid password !");
            }else{
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
                res.send({
                     success: true,
                     message: "user logged in successfully",
                     data: token
                })
            }
        }else{
            throw new Error("user not found !!");
        }
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
     }
    },
    getUser:async(req,res)=>{
        try {
            const user = await User.findById({ _id: req.body.userId }).exec();
            res.send({
                success: true,
                message: "user fetched success",
                data: user
            })
        } catch (err) {
            res.send({
                success: false,
                message: err.message
            })
        }
    }
    
}