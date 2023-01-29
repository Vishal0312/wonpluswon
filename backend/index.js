const express = require('express')
const {ProductRouter} = require('./routes/product.route')
const {AdminRouter} = require('./routes/admin.route')
const {UserRouter} = require('./routes/user.routes')
const {connection} = require('./config/db')
const { authentication } = require('./middlewares/product.middleware')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Yes I am working")
})
app.use('/users',UserRouter)
app.use('/admin', AdminRouter)
app.use(authentication)
app.use('/products',ProductRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connection set")
    }catch(err){
        console.log(err)
        console.log("Not set")
    }
    console.log(`server running on port ${process.env.port}`)
})