import { Router } from "express";
import { createInvestment, getInvestments, updateInvestment } from "../controllers/investments.controller.js";
import { validateJWT } from "../middlewares/validateJWT.js";
import { validatorData } from "../middlewares/ValidatorData.js";
import { investmentSchema } from "../schemas/investmentSchema.js";

const router = Router();

router.get("/investments/:id", validateJWT ,getInvestments);

router.post("/investments", validateJWT ,validatorData(investmentSchema) ,createInvestment);

router.put("/investments/:id", validateJWT ,updateInvestment);

export default router;
