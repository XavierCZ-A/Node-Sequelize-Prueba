import { z } from "zod";

export const investmentSchema = z.object({
    amount_invested: z.number({required_error: "Amount is required"}).positive({message: "Amount must be positive"}),
    user_id: z.number({required_error: "User ID is required"}).positive({message: "User ID must be positive"}),
    opportunity_id: z.number({required_error: "Opportunity ID is required"}).positive({message: "Opportunity ID must be positive"}),
});

