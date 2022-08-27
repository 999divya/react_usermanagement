const User=require('../models/userModel')
const asyncHandler=require('express-async-handler');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (req,res)=>{

  console.log('huhuhuhuhu')
    const {name, email, password} = req.body;

    const userExists= await User.findOne({email});

    if(userExists){
        res.status(400).json({'message':'User Already Exists'})
        // throw new Error("User Already Exists")
    }


    const user= await User.create({
        name,
        email,
        password,
       
    })
console.log("the created user is here"+user)
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })

    }else{
        res.status(400).json({'message':'Error occured'})
        // throw new Error("Error occured")
    }
 
});


//for login purposes
const authUser= asyncHandler(async (req,res)=>{
  console.log('aaoopopopop');
    const {email,password} = req.body;
    console.log("ggfggghgh",req.body);

    const user= await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
           
            token:generateToken(user._id)
        })
    }else{
        res.status(400).json({'message':'Invalid email or password'})
        // throw new Error("Invalid email or password")
    }
});


//get the all users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
      const users = await User.find({});
      
      res.json(users);

    } catch (error) {
      res.json(error);
    }
  });

  //delete user 
const deleteUser = asyncHandler(async (req, res, next) => {
    try {
      const user = await User.findById(req.query.id);
      await user.remove();
      res.json({});
    } catch (error) {
      res.json(error);
    }
  });

  //get a user 
const getuser = asyncHandler(async (req, res) => {
  console.log("the user for edit"+req.params.userId)
    try {
    
      const user = await User.findById(req.params.userId);

      res.json(user);
   
    } catch (error) {
      res.json(error);
    }
  });
  
  //update a user details
  const updateUser = asyncHandler(async (req, res) => {
    try {
      const newUserData = {
        name: req.body.name,
        email: req.body.email,
      };
      const user = await User.findByIdAndUpdate(req.params.userId, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      res.status(200).json({
        success: true,
      });
    } catch (error) {
      res.json(error);
    }
  });

module.exports={registerUser, authUser, getAllUsers, deleteUser, getuser, updateUser};