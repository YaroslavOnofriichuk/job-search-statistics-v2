import { Outlet } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql";
import { Layout } from "./layout";



function App() {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Outlet />
            </Layout>
        </ApolloProvider>
    );
}

export default App;
