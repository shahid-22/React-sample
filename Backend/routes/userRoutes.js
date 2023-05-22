const router=require('express').Router();
const UserController=require('../controllers/userControllers')
const authMiddleware=require('../middlewear/authmiddlewear')



router.post('/signup',UserController.userSignup)
router.post('/login',UserController.userlogin)
router.get('/get-user-data',authMiddleware,UserController.getUser)
router.post('/update-user-data',authMiddleware,UserController.updateProfile)

module.exports=router