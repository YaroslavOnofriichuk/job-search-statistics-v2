import { Form } from "../Form";
import type { FormData } from "../Form";

export const Register = () => {
    const onSubmit = (data: FormData) => console.log(data);

    return <Form onSubmit={onSubmit} />
};