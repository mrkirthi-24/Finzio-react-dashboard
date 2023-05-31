import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis, products } from "./data/data.js";
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js";

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

//ROUTES
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);

//MONGOOSE SETUP
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}...`));

    // To avoid duplicate data || Add data one time only or when needed // only recommended for development not for production
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
  })
  .catch((err) => console.log(`${err} Failed to connect...`));
