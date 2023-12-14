import { client, GET_TAGS, GET_SOURCES } from "../../graphql";
import { Layout } from "../../layout";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./Wrapper";
import { ButtonLink } from "../../components/LinkButton";
import { Form, FormData } from "./Form";

export function AddNotePage() {
	const { t } = useTranslation("pages/add-note");

	const onSubmit = (data: FormData) => {
        console.log("data", data)
    };

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