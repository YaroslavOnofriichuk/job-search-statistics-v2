import { Dispatch, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useCallbackState, useMatchMedia } from "../../../hooks";
import { Bar } from "./Bar";
import { StatusButton } from "../../../components/StatusButton";
import { Input } from "../../../components/form";
import { Button } from "../../../components/Button";
import { SortIcon } from "../../../components/icons";
import type { NoteStatus } from "../../../types";
import type { TableState, Action } from "../reducer"

interface BarProps {
    filters: TableState,
    dispatch: Dispatch<Action>,
}

let timer: ReturnType<typeof setTimeout>

const statuses: Array<keyof typeof NoteStatus | "ALL"> = 
    ["ALL", "ACCEPTED", "REJECTED", "CONSIDERED", "SENT", "TEST_TASK", "INTERVIEW"];

export const FiltersBar = ({ filters, dispatch }: BarProps) => {
    const [value, setValue] = useCallbackState(filters.search || "");
    const { isDesktop } = useMatchMedia();
    const { t } = useTranslation("components/filters-bar");

    const handleChangeStatus = (status: keyof typeof NoteStatus | "ALL") => {
        dispatch({ type: "SET_STATUS", payload: status });
    };

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value, (newValue) => {
            clearTimeout(timer);
            timer = setTimeout(() => { 
                dispatch({ type: "SET_SEARCH", payload: newValue });
            }, 500)
        });         
    };

    return <Bar>
        <Input 
            type="search"
            name="search"
            placeholder={t("search")}
            value={value}
            onChange={handleChangeSearch}
            size="small"
        />

        {isDesktop ? <ul>
            {statuses.map(status => (
                <li key={status}>
                    <StatusButton 
                        status={status}
                        onClick={() => handleChangeStatus(status)}
                        active={(filters.status || "ALL") === status}
                        disabled={(filters.status || "ALL") === status}
                    />
                </li>
            ))}
        </ul> : <div style={{ margin: "0 10px" }}></div>}

        <Button
            size="small"
            label={filters.sort === "DESC" ? t("descent") : t("ascent")}
            onClick={() => dispatch({ type: "SET_SORT", payload: filters.sort === "DESC" ? "ASC" : "DESC" })}
        >
            <SortIcon />
        </Button>
    </Bar>;
};