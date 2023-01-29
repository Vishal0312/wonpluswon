const express = require('express')
const ProductRouter = express.Router()
const {ProductModel} = require('../models/product.model')



ProductRouter.get('/',async(req,res)=>{
    try{
        const products = await ProductModel.find()
        res.send(products)
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
})

ProductRouter.post('/create',async(req,res)=>{
    const data = req.body
    console.log(data)
    try{
        let product = new ProductModel(data)
        console.log(product)
        await product.save()
        res.send('Prodcut is added')
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
 
})

ProductRouter.patch('/update/:id',async(req,res)=>{
    const payload = req.body
    const ID = req.params.id
    const product = await ProductModel.find({_id:ID})
    const userID_in_product = product[0].userID 
    const userID_making_request = req.body.userID
    try{
        if(userID_in_product!=userID_making_request){
            res.send('You are not authorized to do the operation')
        }else{
            await ProductModel.findByIdAndUpdate({_id:ID},payload)
        res.send(`Updated the product with id - ${ID}`)
        }
        
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
    
})

ProductRouter.delete('/delete/:id',async(req,res)=>{
    const ID = req.params.id
    const note = await ProductModel.find({_id:ID})
    const userID_in_note = note[0].userID 
    const userID_making_request = req.body.userID
    try{
        if(userID_in_note!=userID_making_request){
            res.send('You are not authorized')
        }else{
            await ProductModel.findByIdAndDelete({_id:ID})
        res.send(`Updated the note with id - ${ID}`)
        }
        
    }catch(err){
        console.log(err)
        res.send('Something went wrong')
    }
})

module.exports={
    ProductRouter
}



// //{
//     "title":"yes",
//     "subject":"physics",
//     "url":"hlfjkerft4rg5rt"
    
//   }