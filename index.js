const express=require("express");
const server=express();
const mongoose=require("mongoose")
const cors=require('cors');
const ProductRouter = require("./routes/ProductRoutes");
const CategoryRouter = require("./routes/CategoryRoutes");
const BrandRouter = require("./routes/BrandRoutes");
server.use(cors(
  {exposeHeaders:['X-Total-Count']} //once we assign header it becomes imp top expose them
))
server.use(express.json());
server.use("/",ProductRouter);
server.use("/",CategoryRouter);
server.use("/",BrandRouter);
mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => {
    console.log("DataBase connected");
    server.listen(8000, () => {
      console.log("listening");
    });
  })
  .catch((err) => {
    console.log(err);
  });



