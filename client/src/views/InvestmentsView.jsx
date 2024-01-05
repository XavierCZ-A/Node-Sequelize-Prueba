import { useEffect } from "react";
import { useInvestment } from "../hooks/useInvestment";
import { useNavigate } from "react-router-dom";
export const InvestmentsView = () => {

    const { getOpportunities, investments, selectInvestment } = useInvestment();
    

    const navigate = useNavigate();

    const handleInvestClick = (investment) => {
        selectInvestment(investment)
    };

    useEffect(() => {
        getOpportunities();
    }, [])


    return (
        <>
            {investments.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                    {investments.map((investment, i) => (
                        <div key={i} className="bg-white p-4 rounded-md shadow-md relative">
                            <h3 className="text-lg font-semibold mb-2">{investment.name}</h3>
                            <p className="text-gray-600 mb-2">{investment.description}</p>
                            <p className="text-blue-500 font-bold mb-2">${investment.amount}</p>
                            <button
                                className="bg-indigo-50 px-4 py-1 rounded-md"
                                onClick={() => {
                                    handleInvestClick(investment);
                                    navigate("/investment");
                                }}
                            >
                                Invertir
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No tienes inversiones.</p>
            )}
        </>
    );

}
