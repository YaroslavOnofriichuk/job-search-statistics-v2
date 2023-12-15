import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { Input, Form as FormStyled, Select, DatePicker, TextArea } from "../../../components/form";
import { Button } from "../../../components/Button";
import { LoadingIcon } from "../../../components/icons";
import { NoteStatus } from "../../../types";
import { useLoaderData } from "react-router-dom";
import type { NoteSource, Tag } from "../../../types";
import { useState } from "react";

interface FormProps {
    onSubmit: (data: FormData) => void;
}

export type FormData = {
    position: string;
    company: string;
    link: string;
    source: string;
    description?: string;
    status: NoteStatus;
    createdAt: Date;
    tags?: string[];
};

type LoaderData = {
    tags: Tag[];
    sources: NoteSource[];
};

export const Form = (props: FormProps) => {
    const { t } = useTranslation("pages/add-note");
    const { tags, sources } = useLoaderData() as LoaderData;
    const [isShowSource, setIsShowSource] = useState(false);

    const schema = yup
        .object({
            position: yup
                .string()
                .max(128, t("errors.length.position"))
                .required(t("errors.required.position")),
            company: yup
                .string()
                .max(128, t("errors.length.company"))
                .required(t("errors.required.company")),
            link: yup
                .string()
                .url(t("errors.valid.link"))
                .max(256, t("errors.length.link"))
                .required(t("errors.required.link")),
            source: yup
                .string()
                .max(128, t("errors.length.source"))
                .notOneOf(["other"], t("errors.not.source"))
                .required(t("errors.required.source")),
            description: yup.string().optional(),
            status: yup
                .string()
                .oneOf(Object.values(NoteStatus))
                .required(t("errors.required.status")),
            createdAt: yup.date().required(t("errors.required.createdAt")),
            tags: yup.array().optional(),
        })
        .required();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            position: "",
            company: "",
            source: "",
            description: "",
            status: NoteStatus.SENT,
            createdAt: new Date(),
            tags: [],
            link: "",
        },
    });

    return (
        <FormStyled onSubmit={handleSubmit(props.onSubmit)}>
            <Controller
                name="position"
                control={control}
                render={({ field }) => (
                    <Input
                        type="other"
                        size="big"
                        onChange={field.onChange}
                        name={field.name}
                        value={field.value}
                        error={!!errors.position}
                        helperText={
                            errors.position ? errors.position?.message : null
                        }
                        placeholder={t("fields.position")}
                    />
                )}
            />

            <Controller
                name="company"
                control={control}
                render={({ field }) => (
                    <Input
                        type="other"
                        size="big"
                        onChange={field.onChange}
                        name={field.name}
                        value={field.value}
                        error={!!errors.company}
                        helperText={
                            errors.company ? errors.company?.message : null
                        }
                        placeholder={t("fields.company")}
                    />
                )}
            />

            <Controller
                name="link"
                control={control}
                render={({ field }) => (
                    <Input
                        type="url"
                        size="big"
                        onChange={field.onChange}
                        name={field.name}
                        value={field.value}
                        error={!!errors.link}
                        helperText={
                            errors.link ? errors.link?.message : null
                        }
                        placeholder={t("fields.link")}
                    />
                )}
            />

            <Controller
                name="source"
                control={control}
                render={({ field }) => (
                    <Select
                        size="big"
                        onChange={(e) => {
                            setIsShowSource(e.target.value === "other");
                            field.onChange(e);
                        }}
                        name={field.name}
                        value={field.value}
                        error={!!errors.source}
                        helperText={
                            errors.source ? errors.source?.message : null
                        }
                        placeholder={t("fields.source")}
                        options={[
                            ...sources.map((source) => ({
                                label: source.name || "",
                                value: source.name || "",
                            })),
                            { label: t("other"), value: "other" },
                        ]}
                    />
                )}
            />

            {isShowSource && <Controller
                name="source"
                control={control}
                render={({ field }) => (
                    <Input
                        type="other"
                        size="big"
                        onChange={field.onChange}
                        name={field.name}
                        value={field.value}
                        error={!!errors.source}
                        helperText={
                            errors.source ? errors.source?.message : null
                        }
                        placeholder={t("fields.source")}
                    />
                )}
            />}

            <Controller
                name="createdAt"
                control={control}
                render={({ field }) => (
                    <DatePicker
                        onChange={field.onChange}
                        name={field.name}
                        value={field.value}
                        error={!!errors.createdAt}
                        helperText={
                            errors.createdAt ? errors.createdAt?.message : null
                        }
                        placeholder={t("fields.createdAt")}
                    />
                )}
            />

            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <TextArea
                        onChange={field.onChange}
                        name={field.name}
                        value={field.value || ""}
                        error={!!errors.description}
                        helperText={
                            errors.description ? errors.description?.message : null
                        }
                        placeholder={t("fields.description")}
                    />
                )}
            />

            <input type="tel" />

            <Button
                type="submit"
                size="big"
                label={t("continue")}
                disabled={Object.keys(errors).length > 0}
            >
                {isSubmitting && <LoadingIcon />}
            </Button>
        </FormStyled>
    );
};
