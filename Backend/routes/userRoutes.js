const router=require('express').Router();
const UserController=require('../controllers/userControllers')




router.post('/signup',UserController.userSignup)
router.post('/login',UserController.userlogin)

module.exports=router