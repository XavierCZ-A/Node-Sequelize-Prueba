import { createContext, useEffect, useState } from 'react'
import { loginRequest, registerRequest, verifyTokenRequest } from '../requests/aunthRequest'
import Cookies from "js-cookie";



export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [authenticate, setAuthenticate] = useState(false)
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(true) 

    const registerUser = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setAuthenticate(true);

        } catch (error) {
            setError(error.response.data)
        }
    }

    const loginUser = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setAuthenticate(true);

        } catch (error) {
            console.log(error.response.data);
            setError(error.response.data)
        }
    }

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setAuthenticate(false);
    }

    const checkAuthenticate = async () => {
        const cookie = Cookies.get();

        if (!cookie.token) {
            setAuthenticate(false);
            setUser(null);
            setLoading(false);
            return;
        }
        try {
            const res = await verifyTokenRequest(cookie.token);
            if (!res.data) {
                setAuthenticate(true);
                setLoading(false);
                return 
            }
            setAuthenticate(true);
            setUser(res.data);
            setLoading(false);
        } catch (error) {
            setAuthenticate(false);
            setUser(null);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (error.length > 0) {
            setTimeout(() => {
                setError([])
            }, 2000);
        }
    }, [error])

    useEffect(() => {

        checkAuthenticate();

    }, [])

    return (
        <AuthContext.Provider value={{ registerUser, loginUser, logout,loading, user, authenticate, error }} >
            {children}
        </AuthContext.Provider>
    )
}
