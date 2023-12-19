import { Form } from "../Form";
import type { FormData } from "../Form";
import { LOGIN } from "../../../graphql";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useAuthStore, useToast } from "../../../hooks";

export const Login = () => {
    const [login, { data, error }] = useMutation(LOGIN);
    const { setIsLoggedIn } = useAuthStore();
    const { addToast } = useToast();

    const onSubmit = (data: FormData) => {
        login({ variables: { email: data.email, password: data.password } });
    };

    useEffect(() => {
        if (data?.login?.accessToken && data?.login?.refreshToken) {
            localStorage.setItem("accessToken", data.login.accessToken);
            localStorage.setItem("refreshToken", data.login.refreshToken);
            setIsLoggedIn(true);
        }
    }, [data, setIsLoggedIn]);

    useEffect(() => {
        if (error?.message) {
            addToast({
                status: "error",
                text: Array.isArray(error.message)
                    ? error.message.join(", ")
                    : error.message,
            });
        }
    }, [addToast, error]);

    return <Form onSubmit={onSubmit} />;
};
