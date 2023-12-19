import { useMutation } from "@apollo/client";
import { Form } from "../Form";
import type { FormData } from "../Form";
import { REGISTER } from "../../../graphql";
import { useEffect } from "react";
import { useAuthStore, useToast } from "../../../hooks";

export const Register = () => {
    const [register, { data, error }] = useMutation(REGISTER);
    const { setIsLoggedIn } = useAuthStore();
    const { addToast } = useToast();
    
    const onSubmit = (data: FormData) => {
        register({ variables: { email: data.email, password: data.password } });
    };

    useEffect(() => {
        if (data?.register?.accessToken && data?.register?.refreshToken) {
            localStorage.setItem("accessToken", data.register.accessToken);
            localStorage.setItem("refreshToken", data.register.refreshToken);
            setIsLoggedIn(true);
        }
    }, [data, setIsLoggedIn])

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

    return <Form onSubmit={onSubmit} />
};