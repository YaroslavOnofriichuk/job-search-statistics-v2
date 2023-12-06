import { useRouteError } from "react-router-dom";
import { Layout } from "../../layout";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <Layout>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        </Layout>
    );
};
