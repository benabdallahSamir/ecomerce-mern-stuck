import express from "express";
import { isLoggedIn, login, logout, signup } from "../controllers/auth.js";

const router = express.Router();

router.get("/isLoged", isLoggedIn);
router.post("/login", login);
router.post("/signup", signup);
router.get("/logout", logout);

export default router;
