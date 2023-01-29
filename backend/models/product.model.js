const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title:String,
    subject:String,
    adminID:String,
    url:String
})
const ProductModel = mongoose.model('product',ProductSchema)

module.exports = {
    ProductModel
}
