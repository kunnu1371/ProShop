import express from "express";
import dotenv from "dotenv";
import path from "path";
import colors from "colors";
import morgan from "morgan";
import connection from "./backend/config/db.js";
import productRoutes from "./backend/routes/product.js";
import userRoutes from "./backend/routes/user.js";
import orderRoutes from "./backend/routes/order.js";
import uploadRoutes from "./backend/routes/upload.js";
import {
  notFound,
  errorHandler,
} from "./backend/middleware/errorMiddleware.js";

dotenv.config();
connection();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  // app.use(express.static(path.join(__dirname, "/frontend/build")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  // });
  app.use(express.static('frontend/build'))
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
