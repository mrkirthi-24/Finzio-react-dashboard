import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import kpiRoutes from "./routes/kpi.js";

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

//MONGOOSE SETUP
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}...`));
  })
  .catch((err) => console.log(`${err} Failed to connect...`));
