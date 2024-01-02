import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { Input, Form as FormStyled } from "../../../components/form";
import { Button } from "../../../components/Button";
import { LoadingIcon } from "../../../components/icons";

interface FormProps {
    onSubmit: (data: FormData) => void
}

export type FormData = {
    email: string;
    password: string;
};

export const Form = (props: FormProps) => {
    const { t } = useTranslation("pages/auth");
    const schema = yup.object({
        email: yup.string().email(t("errors.valid.email")).required(t("errors.required.email")),
        password: yup.string().min(6, t("errors.length.password")).required(t("errors.required.password")),
    }).required();

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    return <FormStyled onSubmit={handleSubmit(props.onSubmit)}>
        <Controller
            name="email"
            control={control}
            render={({ field }) => (
                <Input 
                    size="big"
                    type="email" 
                    onChange={field.onChange}
                    name={field.name}
                    value={field.value}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email?.message : null}
                    placeholder={t("fields.email") + " *"}
                />
            )}
        />

        <Controller
            name="password"
            control={control}
            render={({ field }) => (
                <Input 
                    size="big"
                    type="password" 
                    onChange={field.onChange}
                    name={field.name}
                    value={field.value}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password?.message : null}
                    placeholder={t("fields.password") + " *"}
                />
            )}
        />

        <Button 
            type="submit"
            size="big"
            label={t("continue")}
            disabled={Object.keys(errors).length > 0}
        >
            {isSubmitting && <LoadingIcon />}
        </Button>
    </FormStyled>
};