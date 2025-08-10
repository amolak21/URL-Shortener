import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import urlRoutes from "./routes/urlRoutes";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({}));
app.use(express.json());

const mongoUri = process.env.MONGO_URI || "";

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/", urlRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
