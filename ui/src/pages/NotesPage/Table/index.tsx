import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { Table as TableStyled } from "./Table";
import { GET_NOTES } from "../../../graphql";
import type { Note } from "../../../types";
import { Pagination } from "../../../components/Pagination";
import { StatusButton } from "../../../components/StatusButton";
import { Loader } from "../../../components/Loader";
import { FiltersBar } from "../FiltersBar";
import { formatDate } from "../../../helpers";
import { reducer, initialState } from "../reducer";

export const Table = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, loading, error, refetch } = useQuery(GET_NOTES, { variables: state });
    const { t } = useTranslation("pages/notes");
    const navigate = useNavigate();

    useEffect(() => {
        if (JSON.stringify(state) !== JSON.stringify(initialState)) {
            refetch(state);
        }
    }, [refetch, state])

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <h1>Error</h1>
    }
    
    return <>
        <FiltersBar filters={state} dispatch={dispatch} />
        <TableStyled>
            <thead>
                <tr>
                    <th>{t("columns.createdAt")}</th>
                    <th>{t("columns.position")}</th>
                    <th>{t("columns.company")}</th>
                    <th>{t("columns.source")}</th>
                    <th>{t("columns.description")}</th>
                    <th>{t("columns.status")}</th>
                </tr>
            </thead>

            <tbody>
                {data.notes.notes.map((note: Note) => (
                    <tr key={note.id} onClick={() => navigate("/notes/edit/" + note.id)}>
                        <td>{note.createdAt ? formatDate(note.createdAt, "dd MMM yyyy HH:mm") : ""}</td>
                        <td>{note.position}</td>
                        <td>{note.company}</td>
                        <td>{note.source?.name}</td>
                        <td>{note.description || ""}</td>
                        <td>
                            <StatusButton 
                                status={note.status || "ALL"}
                                disabled
                            />
                        </td>
                    </tr>
                ))}
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={6} align="right">
                        {data.notes.totalPages > 1 && <Pagination 
                            onChange={(page) => dispatch({ type: "SET_PAGE", payload: page })}
                            currentPage={data.notes.currentPage}
                            limit={data.notes.limit}
                            nextPage={data.notes.nextPage}
                            prevPage={data.notes.prevPage}
                            totalItems={data.notes.totalItems}
                            totalPages={data.notes.totalPages}
                        />}
                    </td>
                </tr>
            </tfoot>
        </TableStyled>
    </>;
};