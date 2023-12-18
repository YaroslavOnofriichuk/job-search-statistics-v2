import { useQuery } from "@apollo/client";
import { GET_NOTE } from "../../../graphql";
import { useParams } from "react-router-dom";
import { Loader } from "../../../components/Loader";
import { Select, TextArea } from "../../../components/form";
import { Info as InfoStyled } from "./Info";
import { useTranslation } from "react-i18next";
import { NoteStatus } from "../../../types";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formatDate } from "../../../helpers";
import type { NoteTag } from "../../../types";
import { Button } from "../../../components/Button";
import { LoadingIcon } from "../../../components/icons";

export type FormData = {
    description?: string;
    status?: NoteStatus;
    id: number;
};

interface InfoProps {
    onSubmit: (data: FormData) => void;
}

export const Info = (props: InfoProps) => {
    const { id } = useParams();
    const {
        data,
        loading,
        error,
    } = useQuery(GET_NOTE, {
        variables: { id: Number(id) },
    });
    const { t } = useTranslation("pages/edit-note");

    const schema = yup
        .object({
            description: yup.string().optional(),
            status: yup.string().oneOf(Object.values(NoteStatus)).optional(),
            id: yup.number().required(),
        })
        .required();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            description: data?.note.description,
            status: data?.note.status,
            id: Number(id),
        },
    });

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <h1>Error</h1>;
    }

    return (
        <InfoStyled>
            <div>
                <p>{t("fields.position")}:</p>
                <p>{data.note.position}</p>
            </div>

            <div>
                <p>{t("fields.company")}:</p>
                <p>{data.note.company}</p>
            </div>

            <div>
                <p>{t("fields.link")}:</p>
                <a href={data.note.link} target="blank" rel="noopener noreferrer">
                    {data.note.link}
                </a>
            </div>

            <div>
                <p>{t("fields.source")}:</p>
                <p>{data.note.source.name}</p>
            </div>

            <div>
                <p>{t("fields.createdAt")}:</p>
                <p>{formatDate(new Date(data.note.createdAt))}</p>
            </div>

            <div>
                <p>{t("fields.tags")}:</p>
                <p>{data.note.tags.reduce((acc: string, nt: NoteTag) => acc + "#" + nt.tag.tag + ", ", "")}</p>
            </div>

            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div>
                    <p>{t("fields.status")}:</p>
                    <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                            <Select
                                size="big"
                                onChange={field.onChange}
                                name={field.name}
                                value={field.value || ""}
                                error={!!errors.status}
                                helperText={
                                    errors.status ? errors.status?.message : null
                                }
                                placeholder={t("fields.status")}
                                options={Object.values(NoteStatus).map((status) => ({
                                    label: t(`status.${status}`),
                                    value: status,
                                }))}
                            />
                        )}
                    />
                </div>

                <div>
                    <p>{t("fields.description")}:</p>
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
                </div>

                <div>
                    <Button
                        type="submit"
                        size="big"
                        label={t("save")}
                        disabled={Object.keys(errors).length > 0 || !isDirty}
                    >
                        {isSubmitting && <LoadingIcon />}
                    </Button>

                    <Button
                        type="button"
                        size="big"
                        label={t("delete")}
                    >
                        {isSubmitting && <LoadingIcon />}
                    </Button>
                </div>
            </form>
        </InfoStyled>
    );
};
