import { useReducer, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { List as ListStyled } from "./List";
import { GET_NOTES } from "../../../graphql";
import type { Note } from "../../../types";
import { Loader } from "../../../components/Loader";
import { Button } from "../../../components/Button";
import { LoadingIcon } from "../../../components/icons";
import { FiltersBar } from "../FiltersBar";
import { formatDate } from "../../../helpers";
import { reducer, initialState } from "../reducer";

export const List = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, loading, error, refetch } = useQuery(GET_NOTES, { 
        variables: state,
    });
    const { t } = useTranslation("pages/notes");
    const ref = useRef<HTMLUListElement | null>(null)

    useEffect(() => {
        if (JSON.stringify(state) !== JSON.stringify(initialState)) {
            refetch(state);
        }
    }, [refetch, state])
    
    const handleLoadMore = () => {
        dispatch({ 
            type: "SET_LIMIT", 
            payload: data.notes.limit + initialState.limit,
        });
        ref.current && ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <h1>Error</h1>
    }
    
    return <>
        <FiltersBar filters={state} dispatch={dispatch} />

        <ListStyled ref={ref}>
            {data.notes.notes.map((note: Note) => (
                <li key={note.id}>
                    <Link 
                        to={"/notes/edit/" + note.id}
                        preventScrollReset={true}
                    >
                        <p>{t("columns.createdAt")}</p>
                        <p>{note.createdAt ? formatDate(note.createdAt, "dd MMM yyyy HH:mm") : ""}</p>
                        <p>{t("columns.position")}</p>
                        <p>{note.position}</p>
                        <p>{t("columns.company")}</p>
                        <p>{note.company}</p>
                    </Link>
                </li>
            ))}

            <Button 
                size="big"
                label={t("loadMore")}
                onClick={handleLoadMore}
                disabled={loading || !data.notes.nextPage}
            >
                {loading && <LoadingIcon />}
            </Button>
        </ListStyled>
    </>;
};