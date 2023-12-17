const express=require("express")
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require("../controller/ProductController");
const ProductRouter=express.Router();
ProductRouter.post("/products",createProduct)
ProductRouter.get("/products",fetchAllProducts)
ProductRouter.get("/products/:id",fetchProductById)
ProductRouter.patch("/products/:id",updateProduct)



module.exports=ProductRouter;