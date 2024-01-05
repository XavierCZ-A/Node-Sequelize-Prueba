import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


export const RegisterView = () => {

    const { register, handleSubmit } = useForm();

    const { registerUser, authenticate, error } = useAuth()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        registerUser(data)
    })

    useEffect(() => {
        if (authenticate) {
            return navigate('/home')
        }
    } , [navigate, authenticate] )


    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-gray-400 p-8 rounded-md shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-white mb-4">Registro</h1>

                {
                    error.map((err, i) => (
                        <p className="bg-red-500 text-white px-4 py-2 rounded-md mb-4" key={i}>
                            {err}
                        </p>
                    ))
                }

                <form onSubmit={onSubmit} className="space-y-4">

                    <input type="text" placeholder="Full name" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" {...register("name", { required: true })} />

                    <input type="date" placeholder="Birthdate" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" {...register("birthdate", { required: true })} />

                    <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" {...register("email", { required: true })} />

                    <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" {...register("password", { required: true })} />

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Register</button>

                </form>
                <p className="mt-4 text-right">
                    Ya tienes cuenta?
                    <Link className=" ml-3 text-white hover:underline" to="/">
                    Iniciar sesión
                    </Link>
                </p>
            </div>
        </div>
    )



}
