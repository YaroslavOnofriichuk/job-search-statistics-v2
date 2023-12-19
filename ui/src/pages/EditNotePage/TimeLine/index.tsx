import { useQuery } from "@apollo/client";
import { GET_STATUSES_HISTORY } from "../../../graphql";
import { useParams } from "react-router-dom";
import { Loader } from "../../../components/Loader";
import { Line } from "./LIne";
import type { StatusHistory } from "../../../types";
import { formatDate } from "../../../helpers";
import { useTranslation } from "react-i18next";

export const TimeLine = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_STATUSES_HISTORY, {
        variables: { noteId: Number(id) },
    });
    const { t } = useTranslation("pages/edit-note");

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <h1>Error</h1>;
    }

    return (
        <Line>
            {(data?.statusesHistory || []).map((statusHistory: StatusHistory) => (
                <li key={statusHistory.id}>
                    <p>{formatDate(new Date(statusHistory.createdAt), "dd MMM yyyy HH:mm")}</p>
                    <p>{t(`status.${statusHistory.status}`)}</p>
                    <p>{statusHistory.description}</p>
                </li>
            ))}
        </Line>
    );
};
