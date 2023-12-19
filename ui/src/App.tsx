import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";
import { useEffect } from "react";

function App() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/notes");
        }
    }, [navigate, pathname]);

    return (
        <ApolloProvider client={client}>
            <Outlet />
        </ApolloProvider>
    );
}

export default App;
