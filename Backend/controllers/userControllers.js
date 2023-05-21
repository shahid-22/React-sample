const bcrypt =require('bcrypt')
const User=require('../models/userModels')
const jwt = require('jsonwebtoken');
module.exports={
    userSignup: async (req ,res) => {
        try{
        console.log(req.body,"req.body");
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
          console.log(req.body,"hiiiii");
          const user = await User.findOne({ email: req.body.email }).exec();
          if(user){
            console.log("user",user);
            const validaPassword = await bcrypt.compare(req.body.password, user.password);
            if(!validaPassword){
                console.log("password incorrect");
                throw new Error("Invalid password !");
            }else{
                console.log("jjjjjjjjj");
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
                console.log("kkkkkkkkkkk");
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
        console.log("gggggggggggggggg");
        res.send({
            success: false,
            message: err.message
        })
     }
    }
}