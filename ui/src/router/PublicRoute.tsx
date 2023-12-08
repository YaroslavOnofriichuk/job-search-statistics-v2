import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from "../hooks";

export const PublicRoute = () => {
    const { isLoggedIn } = useAuthStore();
    return isLoggedIn ? <Navigate to="/notes" /> : <Outlet />;
};