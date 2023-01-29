const express = require('express')
const bcrypt = require('bcrypt')
const {UserModel} = require('../models/user.model')
const {ProductModel} = require('../models/product.model')
const UserRouter = express.Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()

UserRouter.post('/register',async(req,res)=>{
    const {name,age,gender,email,password} = req.body
    try{
        bcrypt.hash(password,3,async(err,hash)=>{
          if(err){
            console.log(err)
          }else{
            const user = new UserModel({name,age,gender,email,password:hash})
            await user.save();
            res.send("Registration successful")
          }  
        })
    }catch(err){
        console.log(err)
        res.send("Error while registering")
    }
})
UserRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body
    try{
        const user = await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    var token = jwt.sign({ userID:user[0]._id }, process.env.key);
                    res.send({"msg":"Login successfull","token":token})               
                }else{
                    res.send("Entered password is wrong.")
                }
            })
        }else{
            res.send("Entered email is not registered.")
        }
    }catch(err){
        console.log(err)
        res.send("Something went wrong")
    }
})

UserRouter.get('/products',async(req,res)=>{
    let query = req.query
    try{
        const products = await ProductModel.find(query)
        res.send(products)
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
})

module.exports={
    UserRouter
}





