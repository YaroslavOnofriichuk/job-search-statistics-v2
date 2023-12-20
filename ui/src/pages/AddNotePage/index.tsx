import { client, GET_TAGS, GET_SOURCES } from "../../graphql";
import { Layout } from "../../layout";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./Wrapper";
import { ButtonLink } from "../../components/LinkButton";
import { Form, FormData } from "./Form";
import { CREATE_NOTE, GET_NOTES, GET_CALENDAR_NOTES } from "../../graphql";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useToast } from "../../hooks";
import { useNavigate } from "react-router-dom";

export function AddNotePage() {
	const { t } = useTranslation("pages/add-note");
	const [createNote, { data, error }] = useMutation(CREATE_NOTE, {
		refetchQueries: [ GET_NOTES, GET_CALENDAR_NOTES ],
	});
	const { addToast } = useToast();
	const navigate = useNavigate();

	const onSubmit = (data: FormData) => {
		createNote({ variables: data });
    };

	useEffect(() => {
		if (data?.createNote?.id) {
			navigate("/notes");
		}
    }, [data, navigate]);

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

    return (<Layout>
		<Wrapper>
			<ButtonLink label={t("goBack")} to="back" />

			<h2 className="page-title">{t("title")}</h2>

			<div className="page-form">
				<Form onSubmit={onSubmit} />
			</div>
		</Wrapper>
	</Layout>)
}

export const addNoteLoader = async () => {
    const tags = await client.query({
		query: GET_TAGS,
	});
    const sources = await client.query({
		query: GET_SOURCES,
	});

	return { 
		tags: tags?.data?.tags || [], 
		sources: sources?.data?.sources || [],
	};
};