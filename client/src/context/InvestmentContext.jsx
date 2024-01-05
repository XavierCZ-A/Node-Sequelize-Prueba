import { createContext, useEffect, useState } from "react";
import { createInvestmentsRequest, getInvestmentsRequest, opportunitiesRequest } from "../requests/investments";



export const InvestmentContext = createContext();

export const InvestmentProvider = ({ children }) => {

    const [investments, setInvestments] = useState([])
    const [opportunities, setOpportunities] = useState(null)
    const [selectedInvestment, setSelectedInvestment] = useState(null);
    const [error, setError] = useState([])




    const getOpportunities = async () => {
        try {
            const res = await opportunitiesRequest()
            setInvestments(res.data)
            setOpportunities(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const addInvestment = async (investment) => {
        try {
            const res = await createInvestmentsRequest(investment)
            if (res.status === 201) {
                return true; 
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            setError(error.response.data)
        }
    }

    const getInvestments = async (userId) => {
        try {
            const res = await getInvestmentsRequest(userId)
            setInvestments(res.data);
            console.log("Investments response:", res.data);
        } catch (error) {
            console.log(error);
        }

    }

    const selectInvestment = (investment) => {
        setSelectedInvestment(investment);
    };

    useEffect(() => {
        getOpportunities()
    }, [])

    useEffect(() => {
        if (error.length > 0) {
            setTimeout(() => {
                setError([])
            }, 2000);
        }
    }, [error])

    return (
        <InvestmentContext.Provider value={{ investments, addInvestment, getOpportunities, getInvestments, opportunities, selectInvestment, selectedInvestment, error }}>
            {children}
        </InvestmentContext.Provider>
    )
}



