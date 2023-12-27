import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Loader } from "../../../components/Loader";
import { GET_STATUS_STATISTIC, GET_TAGS, client } from "../../../graphql";
import { Pie } from "./Pie";

type NoteStatusStatisticResponse = {
    ALL: number;
    ACCEPTED: number;
    REJECTED: number;
    CONSIDERED: number;
    SENT: number;
    TEST_TASK: number;
    INTERVIEW: number;
};

export function FeedbackPage() {
    const { data } = useLoaderData() as { data: NoteStatusStatisticResponse };

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Await
                    resolve={data}
                    errorElement={
                        <div>Could not load feedback statistic 😬</div>
                    }
                    children={<Pie />}
                />
            </Suspense>
        </>
    );
}

export const feedbackLoader = async () => {
    const res = await client.query({
        query: GET_STATUS_STATISTIC,
        variables: { tags: [] },
    });
    const tags = client.query({
        query: GET_TAGS,
    });

    return defer({ data: res.data.statusStatistic, tags });
};
