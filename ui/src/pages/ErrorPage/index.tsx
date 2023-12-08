import {
    isRouteErrorResponse,
    useNavigate,
    useRouteError,
} from "react-router-dom";
import { Layout } from "../../layout";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../hooks";

export const ErrorPage = () => {
    const [message, setMessage] = useState("");
    const { setIsLoggedIn } = useAuthStore();
    const error = useRouteError();
    const navigate = useNavigate();

    useEffect(() => {
        //@ts-ignore
        if (error?.message === "UNAUTHORISED") {
            setIsLoggedIn(false);
            navigate("/auth/signin");
        }

        if (isRouteErrorResponse(error)) {
            switch (error.status) {
                case 404:
                    setMessage("This page doesn't exist!");
                    break;
    
                case 401:
                    setMessage("You aren't authorized to see this");
                    break;
    
                case 500:
                    setMessage("Looks like our API is down");
                    break;
    
                case 418:
                    setMessage("🫖");
                    break;
    
                default:
                    break;
            }
        }

        //@ts-ignore
    }, [error, error?.message, setIsLoggedIn, navigate]);

    return (
        <Layout>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>
                    {message
                        ? message
                        : "Sorry, an unexpected error has occurred."}
                </p>
            </div>
        </Layout>
    );
};
