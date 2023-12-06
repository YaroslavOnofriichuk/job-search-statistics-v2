import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Layout } from "../../layout";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error("=============", error);

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return (
                <Layout>
                    <div>This page doesn't exist!</div>
                </Layout>
            );
        }

        if (error.status === 401) {
            return (
                <Layout>
                    <div>You aren't authorized to see this</div>
                </Layout>
            );
        }

        if (error.status === 500) {
            return (
                <Layout>
                    <div>Looks like our API is down</div>
                </Layout>
            );
        }

        if (error.status === 418) {
            return (
                <Layout>
                    <div>🫖</div>
                </Layout>
            );
        }
    }

    return (
        <Layout>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        </Layout>
    );
};
