const express=require("express");
const { createBrand, fetchBrands } = require("../controller/BrandController");
const BrandRouter=express.Router();
BrandRouter.post("/brands",createBrand)
BrandRouter.get("/brands",fetchBrands)



module.exports=BrandRouter;