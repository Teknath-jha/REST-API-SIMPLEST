const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title : String,
    price : String,
    image : String,
    details : String
});

// we export so that we can use this in other files 
module.exports = mongoose.model("Product",productSchema);