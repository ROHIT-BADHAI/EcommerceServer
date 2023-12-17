const express=require("express")
const { createCategory, fetchCategories } = require("../controller/CategoryController");
const CategoryRouter=express.Router();
CategoryRouter.post("/categories",createCategory)
CategoryRouter.get("/categories",fetchCategories)



module.exports=CategoryRouter;