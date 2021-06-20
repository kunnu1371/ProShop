import express from "express";
import dotenv from "dotenv";
import connection from "./config/db.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connection();

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.json(process.env.PAYPAL_CLIENT_ID);
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
