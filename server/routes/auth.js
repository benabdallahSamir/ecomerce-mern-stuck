import express from "express";
import { isLoggedIn } from "../controllers/auth.js";

const router = express.Router();

router.get("/isLoged", isLoggedIn);

export default router;
