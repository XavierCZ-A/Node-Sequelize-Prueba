import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ButtonLink } from "./ButtonLink";

export const Navbar = () => {
    const { authenticate, logout } = useAuth();

    return (
        <nav className="bg-gray-800 p-4 rounded-md">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex gap-4 items-center">
                    {authenticate ? (
                        <>
                            <li>
                                <ButtonLink to="/opportunities" className="text-white text-sm">
                                    Oportunidades
                                </ButtonLink>
                            </li>
                            <li>
                                <ButtonLink to="/home" className="text-white text-sm">
                                    Inversiones
                                </ButtonLink>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => logout()}
                                    className="text-white text-sm hover:underline cursor-pointer"
                                >
                                    Cerrar sesión
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <ButtonLink to="/" className="text-white text-sm">
                                    Iniciar sesión
                                </ButtonLink>
                            </li>
                            <li>
                                <ButtonLink to="/register" className="text-white text-sm">
                                    Registrarse
                                </ButtonLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );

}
