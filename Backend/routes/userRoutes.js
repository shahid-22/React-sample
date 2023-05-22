const router=require('express').Router();
const userControllers = require('../controllers/userControllers');
const UserController=require('../controllers/userControllers')
const authMiddleware=require('../middlewear/authmiddlewear')



router.post('/signup',UserController.userSignup)
router.post('/login',UserController.userlogin)
router.get('/get-user-data',authMiddleware,userControllers.getUser)

module.exports=router