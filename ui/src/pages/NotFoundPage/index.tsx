import { Layout } from "../../layout";

export function Component() {
    return (<Layout>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
	</Layout>)
}

Component.displayName = "NotFoundPage";