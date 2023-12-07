import {
    ApolloClient,
    ApolloLink,
    FetchResult,
    InMemoryCache,
    Observable,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { REFRESH } from "./auth";
import { GraphQLError } from "graphql";

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_HOST + "/graphql",
});

const authLink = setContext((operation, { headers }) => {
    const token = localStorage.getItem("accessToken");

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors) {
            for (const err of graphQLErrors) {
                if (err.extensions.code === "UNAUTHENTICATED") {
                    if (operation.operationName === "Refresh") return;

                    const observable = new Observable<FetchResult>(
                        (observer) => {
                            (async () => {
                                try {
                                    const accessToken = await refreshToken();

                                    if (!accessToken) {
                                        throw new GraphQLError(
                                            "UNAUTHORISED"
                                        );
                                    }

                                    const subscriber = {
                                        next: observer.next.bind(observer),
                                        error: observer.error.bind(observer),
                                        complete:
                                            observer.complete.bind(observer),
                                    };

                                    forward(operation).subscribe(subscriber);
                                } catch (err) {
                                    observer.error(err);
                                }
                            })();
                        }
                    );

                    return observable;
                }
            }
        }

        if (networkError) console.log(`[Network error]: ${networkError}`);
    }
);

export const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
});

async function refreshToken() {
    try {
        const refreshResolverResponse = await client.mutate({
            mutation: REFRESH,
            variables: { refreshToken: localStorage.getItem("refreshToken") }
        });
        const accessToken =
            refreshResolverResponse.data?.refresh?.accessToken;
        const refreshToken =
            refreshResolverResponse.data?.refresh?.refreshToken;
        if (accessToken && refreshToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            return accessToken;
        }
    } catch (err) {
        console.error(err);
    }
}
