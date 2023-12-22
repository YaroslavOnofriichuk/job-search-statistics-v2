import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Loader } from "../../../components/Loader";
import { GET_SOURCES_STATISTIC, client } from "../../../graphql";
import { NoteStatus } from "../../../types";
import { getStatusColor } from "../../../helpers";
import { useTranslation } from "react-i18next";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "styled-components";
import  * as echarts from 'echarts/core';
import { dark, light, formatter } from "../chartHelpers";

type NoteSourceStatisticResponse = {
    id: number;
    name: string;
    ACCEPTED: number;
    REJECTED: number;
    CONSIDERED: number;
    SENT: number;
    TEST_TASK: number;
    INTERVIEW: number;
};

echarts.registerTheme("dark", dark);
echarts.registerTheme("light", light);

export function SourcesPage() {
    const { data } = useLoaderData() as { data: NoteSourceStatisticResponse[] };
    const { t } = useTranslation("pages/statistic");
    const theme = useTheme();

    const option = {
        legend: {
            orient: "horizontal",
            right: "center",
            top: 0,
            width: "100%",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            className: "chart-tooltip",
            formatter: formatter,
        },
        xAxis: {
            type: "category",
            data: data.map(source => source.name),
            axisTick: {
                alignWithLabel: true,
            },
        },
        yAxis: {
            type: "value",
        },
        series: Object.values(NoteStatus).map(status => ({
            type: "bar",
            color: getStatusColor(status),
            data: data.map(source => source[status]),
            stack: "a",
            name: t(`status.${status}`),
        })),
    };

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Await
                    resolve={data}
                    errorElement={
                        <div>Could not load sources statistic 😬</div>
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

export const sourcesLoader = async () => {
    const res = await client.query({
        query: GET_SOURCES_STATISTIC,
    });

    return { data: res.data.sourcesStatistic };
};
