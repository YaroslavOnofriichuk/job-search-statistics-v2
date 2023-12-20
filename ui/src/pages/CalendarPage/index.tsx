import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { ApolloQueryResult } from "@apollo/client";
import type { NotesPaginationResponse } from "../../types";
import { client, GET_CALENDAR_NOTES } from "../../graphql";
import { Layout } from "../../layout";
import { Loader } from "../../components/Loader";
import { Calendar } from "./Calendar";

export function CalendarPage() {
	const { notes } = useLoaderData() as NotesPaginationResponse;
	
    return (<Layout>
		<Suspense fallback={<Loader />}>
			<Await
				resolve={notes}
				errorElement={
					<div>Could not load notes 😬</div>
				}
				children={<Calendar />}
			/>
		</Suspense>
	</Layout>)
}

export const calendarLoader = async () => {
    const res: ApolloQueryResult<NotesPaginationResponse> = await client.query({
		query: GET_CALENDAR_NOTES,
	});

	return { notes: res.data.notes };
};