import express from "express";
import { getUserToken } from "../middleWare/auth.js";
import { getUserController } from "../controllers/user.js";

const app = express.Router();

app.get("/:userId", getUserToken, getUserController);

export default app;
