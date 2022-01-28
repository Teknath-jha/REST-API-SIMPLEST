const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//dotenv to secure our private keys as JS files are accesable via server console 
dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT,{
        useUnifiedTopology: true , useNewUrlParser:true
    },
    console.log("connected to mongoose DB")
);

// Import all routes
const productRoutes = require('./routes/product');




// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// // parse application/json
app.use(express.json());

// route Middleware
app.use('/api/products',productRoutes);





const PORT = process.env.PORT || 4000

// server created
app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
});