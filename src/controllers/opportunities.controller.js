import { Opportunities } from "../models/opportunities.model.js";

export const getOpportunities = async (req, res) => {

    try {
        const opportunities = await Opportunities.findAll();

        res.json(opportunities);

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

