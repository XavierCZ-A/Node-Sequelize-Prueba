import { Router } from "express";
import { loginUser, registerUser, verifyToken } from "../controllers/auth.controller.js";
import { validatorData } from "../middlewares/ValidatorData.js";
import { registerSchema } from "../schemas/register.schema.js";
import { loginSchema } from "../schemas/login.schema.js";

const router = Router();

router.post("/register", validatorData(registerSchema) ,registerUser)
router.post("/login", validatorData(loginSchema) ,loginUser)
router.get("/verify", verifyToken);

export default router;
