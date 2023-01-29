const jwt = require('jsonwebtoken')
require('dotenv').config()

const authentication=(req,res,next)=>{
    const token = req.headers.token
    if(token){
        const decoded = jwt.verify(token,process.env.key)
        if(decoded){
            
            const  adminID_ = decoded.adminID
            req.body.adminID = adminID_
            
            next()
        }else{
            res.send("Not Authorized,Please login")
        }
    }else{
        res.send("Not Authorized,Please login")
    }
}

module.exports={
    authentication
}

