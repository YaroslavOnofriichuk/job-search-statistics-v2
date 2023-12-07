import { useMutation } from "@apollo/client";
import { Form } from "../Form";
import type { FormData } from "../Form";
import { REGISTER } from "../../../graphql";
import { useEffect } from "react";
import { useAuthStore } from "../../../hooks";

export const Register = () => {
    const [register, { data }] = useMutation(REGISTER);
    const { setIsLoggedIn } = useAuthStore();
    
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

    return <Form onSubmit={onSubmit} />
};