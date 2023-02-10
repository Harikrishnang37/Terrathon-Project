const mongoose = require( "mongoose");

const ProductSchema = mongoose.Schema({
    username: String,
    userid: Number,
    productname: String,
    productid: Number,
    price: Number,
    rating: Number,
    ImgURL: String,
})

module.exports = mongoose.model('products', ProductSchema);