const express = require('express')
const bcrypt = require('bcrypt')
const {AdminModel} = require('../models/admin.model')
const {ProductModel} = require('../models/product.model')
const AdminRouter = express.Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()

AdminRouter.post('/register',async(req,res)=>{
    const {name,age,gender,email,password} = req.body
    try{
        bcrypt.hash(password,3,async(err,hash)=>{
          if(err){
            console.log(err)
          }else{
            const admin = new AdminModel({name,age,gender,email,password:hash})
            await admin.save();
            res.send("Registration successful")
          }  
        })
    }catch(err){
        console.log(err)
        res.send("Error while registering")
    }
})

AdminRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body
    try{
        const admin = await AdminModel.find({email})
        if(admin.length>0){
            bcrypt.compare(password,admin[0].password,(err,result)=>{
                if(result){
                    var token = jwt.sign({ adminID:admin[0]._id }, process.env.key);
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

AdminRouter.get('/myproduct',async(req,res)=>{
    try{
        const products = await ProductModel.find()
        res.send(products)
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
})

module.exports={
    AdminRouter
}





