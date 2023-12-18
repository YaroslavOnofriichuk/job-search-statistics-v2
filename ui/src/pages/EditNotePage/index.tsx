import { client, GET_STATUSES_HISTORY, GET_NOTE, UPDATE_NOTE, GET_NOTES } from "../../graphql";
import { Layout } from "../../layout";
import { useTranslation } from "react-i18next";
import { ButtonLink } from "../../components/LinkButton";
import { Suspense, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useToast } from "../../hooks";
import { Await, Params, useLoaderData, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import type { Note, StatusHistory } from "../../types";
import { TimeLine } from "./TimeLine";
import { Info, FormData } from "./Info";
import { Wrapper } from "./Wrapper";

type LoaderData = {
	note: Note;
	history: StatusHistory[];
}

export function EditNotePage() {
	const { t } = useTranslation("pages/edit-note");
	const { note } = useLoaderData() as LoaderData;
	const [updateNote, { data, error }] = useMutation(UPDATE_NOTE, {
		refetchQueries: [ GET_NOTES ],
	});
	const { addToast } = useToast();
	const navigate = useNavigate();

	const onSubmit = (data: FormData) => {
		updateNote({ variables: data });
    };

	useEffect(() => {
		if (data?.updateNote?.id) {
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
		<ButtonLink label={t("goBack")} to="back" />

		<Suspense fallback={<Loader />}>
			<Await
				resolve={note}
				errorElement={
					<div>Could not load note 😬</div>
				}
				children={<Wrapper>
					<div className="edit-left-side"><Info onSubmit={onSubmit}/></div>
					<div className="edit-right-side"><TimeLine /></div>
				</Wrapper>}
			/>
		</Suspense>
	</Layout>)
}

export const editNoteLoader = async ({ params }: { params: Params }) => {
    const note = await client.query({
		query: GET_NOTE,
		variables: { id: Number(params.id) }
	});
    const history = client.query({
		query: GET_STATUSES_HISTORY,
		variables: { noteId: Number(params.id) }
	});

	return { 
		note: note?.data?.note, 
		history,
	};
};