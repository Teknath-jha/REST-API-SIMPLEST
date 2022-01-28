const Product = require('../model/Product');



//Get all products 
const product_all = async  (req,res)=>{

    try{
        const products = await Product.find();
        res.json(products);                    // sending data in JSON format 
    }catch(error){
        res.json({message: error+" "});
    }

};


//Single product
const product_details = async (req,res)=>{

    try{
        const product = await Product.findById(req.params.productId);
        res.json(product);                    // sending data in JSON format 
    }catch(error){
        res.json({message: error+" "});
    }
};


//Add new product 
const product_create = async (req,res)=>{
    console.log(req.body);
        const product = new Product({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            details: req.body.details
        });

        try{
            const saveProduct = await product.save();
            res.send(saveProduct);                    // sending data in JSON format 
        }catch(error){
            console.log(error);
            res.status(404).send(error+"kaha hai error ");
        }
};


//Update product 
const product_update = async (req,res)=>{
    
     try{
        const product = {
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            details: req.body.details
        };

            const id =req.params.productId;

            const updateProduct = await Product.findByIdAndUpdate(id , product );
            // res.send({message: `Product updated with id ${id}`});
            res.json(updateProduct);  
                               
        }catch(error){
            console.log(error);
            res.status(404).send(error);
        }
};


//Delete product
const product_delete = async (req,res)=>{

    try{
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
    }catch(error){
        res.json({message:error});
    }

};


module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
};