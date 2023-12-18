import { useQuery } from "@apollo/client";
import { GET_STATUSES_HISTORY } from "../../../graphql";
import { useParams } from "react-router-dom";
import { Loader } from "../../../components/Loader";

export const TimeLine = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_STATUSES_HISTORY, {
        variables: { noteId: Number(id) },
    });
    console.log("history", data, loading, error);

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <h1>Error</h1>
    }

    return <div>history</div>;
};
