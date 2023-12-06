import { useMutation } from "@apollo/client";
import { Form } from "../Form";
import type { FormData } from "../Form";
import { REGISTER } from "../../../graphql";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [register, { data, loading, error }] = useMutation(REGISTER);
    const navigate = useNavigate();
    console.log("data", data)
    console.log("loading", loading)
    console.log("error", error)
    
    const onSubmit = (data: FormData) => {
        register({ variables: { email: data.email, password: data.password } });
    };

    useEffect(() => {
        console.log("RUN", data)
        if (data?.register?.accessToken && data?.register?.refreshToken) {
            localStorage.setItem("accessToken", data.register.accessToken);
            localStorage.setItem("refreshToken", data.register.refreshToken);
            navigate("/notes");
        }
    }, [data, navigate])

    return <Form onSubmit={onSubmit} />
};