import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from "../hooks";

export const PrivateRoute = () => {
    const { isLoggedIn } = useAuthStore();
    console.log("PrivateRoute", isLoggedIn)
    return isLoggedIn ? <Outlet /> : <Navigate to="/auth/signin" />;
};