const express =require('express');
const route= express.Router();
const {registerUser, authUser}=require('../controllers/userController')
route.route('/').post(registerUser, authUser);
route.route('/login').post(authUser);
module.exports=route;