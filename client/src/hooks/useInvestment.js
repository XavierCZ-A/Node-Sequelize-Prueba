import { useContext } from "react";
import { InvestmentContext } from "../context/InvestmentContext";

export const useInvestment = () => {
    const context = useContext(InvestmentContext);
    if (!context) throw new Error("useInvestment must be used within a InvestmentProvider");
    return context;
  };


