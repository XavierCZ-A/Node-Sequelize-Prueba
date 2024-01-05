import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export function LoginView() {

    const { register, handleSubmit } = useForm();

    const { loginUser, error, authenticate} = useAuth()

    const navigate = useNavigate()
    
    const onSubmit = handleSubmit(data => {
        loginUser(data);
    })

    useEffect(() => {
        if (authenticate) {
            return navigate('/investment')
        }
    } , [navigate, authenticate] )

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-gray-400 p-8 rounded-md shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-white mb-4">Iniciar sesión</h1>

                {
                    error.map((err, i) => (
                        <p className="bg-red-500 text-white px-4 py-2 rounded-md mb-4" key={i}>
                            {err}
                        </p>
                    ))
                }
                <form onSubmit={onSubmit} className="space-y-4">

                    <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" {...register("email", { required: true })} />

                    <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" {...register("password", { required: true })} />

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Iniciar</button>

                </form>
                <p className="mt-4 text-right">
                    ¿Aun no estas registrado?
                    <Link className=" ml-3 text-white hover:underline" to="/register">
                        Registrar
                    </Link>
                </p>
            </div>
        </div>
    );
}