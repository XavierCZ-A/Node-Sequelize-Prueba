import { Router } from "express";
import { getOpportunities } from "../controllers/opportunities.controller.js";

const router = Router();

router.get("/opportunities", getOpportunities);



export default router;
