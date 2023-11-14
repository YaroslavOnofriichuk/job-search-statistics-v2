import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { Table as TableStyled } from "./Table";
import { GET_NOTES } from "../../../graphql";
import type { Note } from "../../../types";
import { Pagination } from "../../../components/Pagination";
import { formatDate } from "../../../helpers";

export const Table = () => {
    const { data, refetch } = useQuery(GET_NOTES, {
        variables: { page: 1, limit: 10 },
    });
    const { t } = useTranslation("pages/notes");
    const navigate = useNavigate();

    return <TableStyled>
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
                <tr key={note.id} onClick={() => navigate("/notes/" + note.id)}>
                    <td>{note.createdAt ? formatDate(note.createdAt, "dd MMM yyyy HH:mm") : ""}</td>
                    <td>{note.position}</td>
                    <td>{note.company}</td>
                    <td>{note.source?.name}</td>
                    <td>{note.description || ""}</td>
                    <td>{note.status}</td>
                </tr>
            ))}
        </tbody>

        <tfoot>
            <tr>
                <td colSpan={6} align="right">
                    {data.notes.totalPages > 1 && <Pagination 
                        onChange={(page) => refetch({ page, limit: 10 })}
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
    </TableStyled>;
};