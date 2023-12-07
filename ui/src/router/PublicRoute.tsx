import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from "../hooks";

export const PublicRoute = () => {
    const { isLoggedIn } = useAuthStore();
    console.log("PublicRoute", isLoggedIn)
    return isLoggedIn ? <Navigate to="/notes" /> : <Outlet />;
};