import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export const ProtectedRoute = () => {
    const { authenticate, loading } = useAuth();


    if (loading) return <h1>Loading...</h1>;
    if (!loading && !authenticate) return <Navigate to="/" replace />;

    return <Outlet />;
};