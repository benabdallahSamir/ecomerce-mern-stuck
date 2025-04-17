import express from "express";
import auth from "./auth.js";
const router = express.Router();

// Define routes here
router.use("/auth", auth);

export default router;
