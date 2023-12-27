import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Loader } from "../../../components/Loader";
import { GET_CALENDAR_NOTES, client } from "../../../graphql";
import { NoteStatus, NotesPaginationResponse } from "../../../types";
import { formatDate, getStatusColor } from "../../../helpers";
import { useTranslation } from "react-i18next";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "styled-components";
import * as echarts from "echarts/core";
import { dark, light, dynamicsFormatter } from "../chartHelpers";
import { ApolloQueryResult } from "@apollo/client";
import { eachDayOfInterval, isSameDay } from "date-fns";

echarts.registerTheme("dark", dark);
echarts.registerTheme("light", light);

export function DynamicsPage() {
    const { notes } = useLoaderData() as { notes: NotesPaginationResponse };
    const { t } = useTranslation("pages/statistic");
    const theme = useTheme();

    const dates = eachDayOfInterval({
        start: new Date(notes.notes[0].createdAt),
        end: new Date(notes.notes[notes.notes.length - 1].createdAt),
    });

    const option = {
        title: {
            text: t("total", { total: notes.totalItems }),
        },
        tooltip: {
            trigger: "item",
            className: "chart-tooltip",
            formatter: dynamicsFormatter,
        },
        xAxis: {
            type: "category",
            splitLine: {
                show: true,
            },
            axisLabel: {
                margin: 15,
                fontSize: 16,
            },
            boundaryGap: false,
            data: dates.map((date) => formatDate(date)),
        },
        yAxis: {
            type: "value",
            interval: 1,
            axisLabel: {
                margin: 15,
                fontSize: 16,
            },
        },
        series: ["ALL", ...Object.values(NoteStatus)].map((status) => ({
            name: t(`status.${status}`),
            color: getStatusColor(status as NoteStatus),
            symbolSize: 20,
            type: "line",
            smooth: true,
            emphasis: {
                focus: "series",
            },
            endLabel: {
                show: true,
                formatter: "{a}",
                distance: 20,
            },
            lineStyle: {
                width: 4,
            },
            data: dates.map((date) => ({
                name: formatDate(date),
                value: notes.notes.filter(
                    (note) =>
                        (status === "ALL" ? true : note.status === status) &&
                        isSameDay(date, new Date(note.createdAt))
                ).length,
            })),
        })),
    };

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Await
                    resolve={notes}
                    errorElement={
                        <div>Could not load dynamics statistic 😬</div>
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

export const dynamicsLoader = async () => {
    const res: ApolloQueryResult<NotesPaginationResponse> = await client.query({
        query: GET_CALENDAR_NOTES,
        variables: {
            sort: "ASC",
        },
    });

    return { notes: res.data.notes };
};
