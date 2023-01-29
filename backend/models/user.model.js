const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    age:String,
    gender:String,
    email:String,
    password:String
})
const UserModel = mongoose.model('user',userSchema)

module.exports = {
    UserModel
}