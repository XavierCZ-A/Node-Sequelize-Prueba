import { useEffect } from "react";
import { useInvestment } from "../hooks/useInvestment";
import { useAuth } from "../hooks/useAuth";

export const PrincipalView = () => {

    const { investments, getInvestments } = useInvestment();
    const { user } = useAuth();

    useEffect(() => {
        if (user && user.id) {
            getInvestments(user.id);
        }
    }, [user]);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {investments.length > 0 ? (
                investments.map((investment, i) => (
                    <div key={i} className="bg-white p-4 rounded-md shadow-md">

                        <p className="text-blue-500 font-bold mb-2">Monto invertido: {investment.amount_invested}</p>
                        <p className="text-gray-600 mb-2">Rendimiento {investment.opportunity?.yield_rate}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-600">No hay inversiones disponibles.</p>
            )}
        </div>
    );
};