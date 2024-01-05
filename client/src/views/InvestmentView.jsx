import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useInvestment } from "../hooks/useInvestment";
import { useNavigate } from "react-router-dom";


export const InvestmentView = () => {

  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const { addInvestment, selectedInvestment, error } = useInvestment();

  const navigate = useNavigate();


  const onSubmit = async (data) => {
    try {
      const amountInvested = parseFloat(data?.amount_invested);

      const userId = user.id;

      const opportunityId = selectedInvestment.id;

      const investmentData = {
        amount_invested: amountInvested,
        user_id: userId,
        opportunity_id: opportunityId,
      };

      const result = await addInvestment(investmentData);

      console.log(result);

      if (result) { 
        setTimeout(() => {
          navigate("/home");
        }, 2000); // Navega a la página de inicio después de 2 segundos
      }

    } catch (error) {

      console.log(); (error);
    }
  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-gray-400 p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-4">Inversión</h1>
        {
          error.map((err, i) => (
            <p className="bg-red-500 text-white px-4 py-2 rounded-md mb-4" key={i}>
              {err}
            </p>
          ))
        }
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="number"
            placeholder="Monto a invertir"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
            {...register("amount_invested", { required: true })}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Invertir
          </button>
        </form>
      </div>
    </div>
  );

}




