import { Form } from "../Form";
import type { FormData } from "../Form";
import { LOGIN } from "../../../graphql";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

export const Login = () => {
    const [login, { data, loading, error }] = useMutation(LOGIN);
    const navigate = useNavigate();

    console.log("data", data)
    console.log("loading", loading)
    console.log("error", error)
    
    const onSubmit = (data: FormData) => {
        login({ variables: { email: data.email, password: data.password } });
    };

    useEffect(() => {
        if (data?.login?.accessToken && data?.login?.refreshToken) {
            localStorage.setItem("accessToken", data.login.accessToken);
            localStorage.setItem("refreshToken", data.login.refreshToken);
            navigate("/notes");
        }
    }, [data, navigate])

    return <Form onSubmit={onSubmit} />
};