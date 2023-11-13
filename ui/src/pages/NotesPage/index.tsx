import { useQuery } from "@apollo/client";
import { client, GET_NOTES } from "../../graphql";

export const NotesPage = () => {
	const { loading, error, data } = useQuery(GET_NOTES);
	
    return <h1>Notes</h1>
};

export const notesLoader = async () => {
    const res = await client.query({
		query: GET_NOTES,
		variables: {
			page: 1,
            limit: 2,
		},
	});
	console.log("res", res)
	return res;
};