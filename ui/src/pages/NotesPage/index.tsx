import { Suspense } from "react";
import { defer, Await, useLoaderData } from "react-router-dom";
import { ApolloQueryResult } from "@apollo/client";
import type { NotesPaginationResponse } from "../../types";
import { client, GET_NOTES } from "../../graphql";
import { useMatchMedia } from "../../hooks";
import { Loader } from "../../components/Loader";
import { List } from "./List";
import { Table } from "./Table";

export const NotesPage = () => {
	const { notes } = useLoaderData() as NotesPaginationResponse;
	const { isMobile } = useMatchMedia();
	
    return (<div>
		<h1>Notes</h1>
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
	</div>)
};

export const notesLoader = async () => {
    const res: ApolloQueryResult<NotesPaginationResponse> = await client.query({
		query: GET_NOTES,
		variables: {
			page: 1,
            limit: 10,
			sort: "DESC",
		},
	});

	return defer({
		notes: res.data.notes,
	})
};