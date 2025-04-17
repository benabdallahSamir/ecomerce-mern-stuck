import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import api from "./routes/api.js";
import cookieParser from "cookie-parser";
// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());
// Basic route
app.use("/api", api);

// Start server
const PORT = process.env.PORT;
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  )
  .catch((err) => console.error("MongoDB connection error:", err));
