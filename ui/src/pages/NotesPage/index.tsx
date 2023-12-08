import { Suspense } from "react";
import { defer, Await, useLoaderData } from "react-router-dom";
import { ApolloQueryResult } from "@apollo/client";
import type { NotesPaginationResponse } from "../../types";
import { client, GET_NOTES } from "../../graphql";
import { useMatchMedia } from "../../hooks";
import { Layout } from "../../layout";
import { Loader } from "../../components/Loader";
import { List } from "./List";
import { Table } from "./Table";
import { ButtonLink } from "../../components/LinkButton";
import { useTranslation } from "react-i18next";

export function NotesPage() {
	const { notes } = useLoaderData() as NotesPaginationResponse;
	const { isMobile } = useMatchMedia();
	const { t } = useTranslation("pages/notes");
	
    return (<Layout>
		<ButtonLink to="add" label={t("add")} />

		<Suspense fallback={<Loader />}>
			<Await
				resolve={notes}
				errorElement={
					<div>Could not load notes 😬</div>
				}
				children={() => (
					isMobile ? <List /> : <Table />
				)}
			/>
		</Suspense>
	</Layout>)
}

export const notesLoader = async () => {
    const res: ApolloQueryResult<NotesPaginationResponse> = await client.query({
		query: GET_NOTES,
		variables: {
			page: 1,
            limit: 2,
			sort: "DESC",
		},
	});

	return defer({
		notes: res.data.notes,
	})
};