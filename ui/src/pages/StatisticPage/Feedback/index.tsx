import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Loader } from "../../../components/Loader";
import { GET_STATUS_STATISTIC, client } from "../../../graphql";
import { NoteStatus } from "../../../types";
import { getStatusColor } from "../../../helpers";
import { useTranslation } from "react-i18next";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "styled-components";
import * as echarts from "echarts/core";
import { dark, light } from "../chartHelpers";

type NoteStatusStatisticResponse = {
    ALL: number;
    ACCEPTED: number;
    REJECTED: number;
    CONSIDERED: number;
    SENT: number;
    TEST_TASK: number;
    INTERVIEW: number;
};

echarts.registerTheme("dark", dark);
echarts.registerTheme("light", light);

export function FeedbackPage() {
    const { data } = useLoaderData() as { data: NoteStatusStatisticResponse };
    const { t } = useTranslation("pages/statistic");
    const theme = useTheme();

    const option = {
        title: {
            text: t("total" , { total: data.ALL }),
            left: "center",
            bottom: "center",
        },
        tooltip: {
            trigger: "item",
            className: "chart-tooltip",
        },
        legend: {
            orient: "horizontal",
            right: "center",
            top: 0,
            width: "100%",
        },
        series: [
            {
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: theme.colors.body.primary,
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: "center",
                },
                labelLine: {
                    show: false,
                },
                color: Object.entries(data)
                    .filter(([key]) => key in NoteStatus)
                    .map(([key]) => getStatusColor(key as NoteStatus)),
                data: Object.entries(data)
                    .filter(([key]) => key in NoteStatus)
                    .map(([key, value]) => ({
                        value,
                        name: t(`status.${key}`),
                    })),
            },
        ],
    };

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Await
                    resolve={data}
                    errorElement={
                        <div>Could not load feedback statistic 😬</div>
                    }
                    children={
                        <ReactEcharts
                            option={option}
                            theme={theme.mode}
                            lazyUpdate={true}
                            style={{ height: "500px" }}
                        />
                    }
                />
            </Suspense>
        </>
    );
}

export const feedbackLoader = async () => {
    const res = await client.query({
        query: GET_STATUS_STATISTIC,
    });

    return { data: res.data.statusStatistic };
};
