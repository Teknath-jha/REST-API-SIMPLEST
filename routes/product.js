const router = require('express').Router();
const productController = require('../controllers/productController');

// requests method 

//post 
router.post("/", productController.product_create);

//get all product
router.get("/" , productController.product_all);

//get particular  user
router.get("/:productId",productController.product_details);

//update particular product info 
router.put("/:productId",productController.product_update);

//delete particular product 
router.delete("/:productId",productController.product_delete);

module.exports = router;