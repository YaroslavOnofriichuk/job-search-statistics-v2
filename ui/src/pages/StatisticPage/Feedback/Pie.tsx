import { Loader } from "../../../components/Loader";
import { GET_STATUS_STATISTIC, GET_TAGS } from "../../../graphql";
import { NoteStatus, Tag } from "../../../types";
import { getStatusColor } from "../../../helpers";
import { useTranslation } from "react-i18next";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "styled-components";
import * as echarts from "echarts/core";
import { dark, light } from "../chartHelpers";
import { useQuery } from "@apollo/client";
import { useCallbackState } from "../../../hooks";

echarts.registerTheme("dark", dark);
echarts.registerTheme("light", light);

export function Pie() {
    const [tags, setTags] = useCallbackState<string[]>([]);
    const { data: statusData, loading: statusLoading, error: statusError, refetch } = useQuery(GET_STATUS_STATISTIC, { variables: { tags } });
    const { data: tagsData, error: tagsError } = useQuery(GET_TAGS);
    const { t } = useTranslation("pages/statistic");
    const theme = useTheme();

    const option = {
        title: {
            text: t("total" , { total: statusData?.statusStatistic?.ALL || 0 }),
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
                color: Object.entries(statusData?.statusStatistic || {})
                    .filter(([key]) => key in NoteStatus)
                    .map(([key]) => getStatusColor(key as NoteStatus)),
                data: Object.entries(statusData?.statusStatistic || {})
                    .filter(([key]) => key in NoteStatus)
                    .map(([key, value]) => ({
                        value,
                        name: t(`status.${key}`),
                    })),
            },
        ],
    };

    const handleClick = (tag: Tag) => {
        const newTags = tags.includes(tag.tag) ? 
            tags.filter(str => str !== tag.tag) :
            [...tags, tag.tag];
        setTags(newTags, (_tags) => refetch({ tags: _tags }))
    };

    if (statusLoading) {
        return <Loader />
    }

    if (statusError || tagsError) {
        return <h1>Error</h1>
    }

    return (
        <div className="pie">
            {tagsData?.tags?.length > 0 && <ul>
                {tagsData.tags.map((tag: Tag) => (
                    <li key={tag.id}>
                        <button 
                            type="button" 
                            onClick={() => handleClick(tag)}
                            className={tags.includes(tag.tag) ? "pie-active-tag" : ""}
                        >
                            #{tag.tag}
                        </button>
                    </li>
                ))}
            </ul>}
            <ReactEcharts
                option={option}
                theme={theme.mode}
                lazyUpdate={true}
                style={{ height: "500px" }}
            />
        </div>
    );
}
