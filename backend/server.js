import express from "express";
import dotenv from "dotenv";
import connection from "./config/db.js";
import productRoutes from "./routes/product.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import Product from "./model/productModel.js";


dotenv.config();
connection();

const app = express();


app.get('/api/products', async function(req, res){
  const products = await Product.find({})
  res.json(products)
})
app.get('/api/products/:id', async function(req, res){
  const products = await Product.find({})
  res.json(products.find((p) => p._id == req.params.id))
})


app.get("/", (req, res) => {
  res.json("Hello");
});

// app.use(notFound);
app.use(errorHandler);


app.use(" ", productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);