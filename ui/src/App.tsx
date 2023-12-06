import { Outlet } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql";

function App() {
    return (
        <ApolloProvider client={client}>
            <Outlet />
        </ApolloProvider>
    );
}

export default App;
