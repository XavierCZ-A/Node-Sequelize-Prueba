import e from "express";
import { Investment } from "../models/investment.model.js";
import { Opportunities } from "../models/opportunities.model.js";
import { Users } from "../models/users.model.js";

export const getInvestments = async (req, res) => {
    try {
        const investments = await Investment.findAll({
            where: {
                user_id: req.params.id
            },
            include: [
                {
                    model: Users,
                    attributes: ['id', 'full_name', 'email']
                },
                {
                    model: Opportunities,
                    attributes: ['id', 'name', 'yield_rate']
                }
            ],
            attributes: ['id', 'user_id', 'opportunity_id', 'amount_invested', 'status']
        });

        res.json(investments);

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const createInvestment = async (req, res) => {
    const { amount_invested, user_id, opportunity_id } = req.body;

    try {
        const userExists = await Users.findByPk(user_id);

        const opportunityExists = await Opportunities.findByPk(opportunity_id);

        const existInvestment = await Investment.findOne({
            where: {
                user_id: user_id,
                opportunity_id: opportunity_id,
            },
        });

        if (existInvestment) {
            return res.status(400).json(["User already has an investment in this opportunity"]);
        }


        if (!userExists || !opportunityExists) {
            return res.status(404).json(["User or opportunity not found"]);
        }

        if (userExists.balance < amount_invested) {
            return res.status(404).json(["Insufficient balance"]);
        }

        const newBalance = userExists.balance - amount_invested;

        await userExists.update({ balance: newBalance });

        const investment = await Investment.create({
            amount_invested: amount_invested,
            user_id: user_id,
            opportunity_id: opportunity_id,
        });

        res.status(201).json(investment);

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateInvestment = async (req, res) => {

    const userId = req.user.id; 

    try {

        const { status } = await Investment.findByPk(req.params.id);

        const investment = await Investment.findOne({
            where: {
                id: req.params.id,
                user_id: userId 
            }
        });

        if (!investment) {
            return res.status(404).json({ message: "Investment not found for the user" });
        }

        if (status === 'inactive') {

            return res.status(404).json({ message: "Investment already inactive" });

        }

        await Investment.update({ status: "inactive" },
            {
                where: {
                    id: req.params.id
                }
            });

        res.status(201).json({ message: "Investment updated" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

