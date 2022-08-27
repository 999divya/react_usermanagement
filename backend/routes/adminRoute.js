const express=require('express')
const route=express.Router();
const {authAdmin}=require('../controllers/adminController');
const { getAllUsers,deleteUser,getuser,updateUser } = require('../controllers/userController');


route.route('/').get(getAllUsers);
route.route('/adminlogin').post(authAdmin);
route.route("/deleteuser").delete(deleteUser);
route.route("/getuser/:userId").get(getuser);
route.route("/edituser/:userId").patch(updateUser);   


module.exports=route;