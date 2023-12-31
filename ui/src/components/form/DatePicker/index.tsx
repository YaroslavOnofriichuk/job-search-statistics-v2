import { UIEvent, useEffect, useRef, useState } from "react";
import { Picker } from "./Picker";
import { generateYears, generateDays, calculateStartPosition } from "./helpers";
import { formatDate } from "../../../helpers";

interface Props {
    error?: boolean;
    helperText?: string | null;
    value: Date;
    onChange: (event: Event) => void;
    name: string;
    placeholder: string;
}

type Event = {
    target: {
        value: Date,
        name: string,
    }
};

type StateType = {
    day: number;
    month: number;
    year: number;
    hour: number;
    minute: number;
};

let timer: number;

export const DatePicker = (props: Props) => {
    const [currentDate, setCurrentDate] = useState<StateType>(() => ({
        day: props.value.getDate(),
        month: props.value.getMonth() + 1,
        year: props.value.getFullYear(),
        hour: props.value.getHours(),
        minute: props.value.getMinutes(),
    }));
    const [days, setDays] = useState<Date[]>(() =>
        generateDays(props.value.getMonth() + 1, props.value.getFullYear())
    );
    const dayRef = useRef<HTMLUListElement>(null);
    const monthRef = useRef<HTMLUListElement>(null);
    const yearRef = useRef<HTMLUListElement>(null);
    const hourRef = useRef<HTMLUListElement>(null);
    const minuteRef = useRef<HTMLUListElement>(null);

    const onMountScroll = (defaultValue: number, element: HTMLUListElement | null) => {
        if (element) {
            element.scrollTo({
                top: calculateStartPosition(
                    element,
                    defaultValue,
                ),
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        onMountScroll(props.value.getDate(), dayRef.current);
        onMountScroll(props.value.getMonth() + 1, monthRef.current);
        onMountScroll(props.value.getFullYear() + 1, yearRef.current);
        onMountScroll(props.value.getHours(), hourRef.current);
        onMountScroll(props.value.getMinutes(), minuteRef.current);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setDays(generateDays(currentDate.month, currentDate.year));
    }, [currentDate]);

    const handleScroll = (event: UIEvent<HTMLUListElement>) => {
        event.stopPropagation();
        const container = event.currentTarget;
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top || 108;
        const containerHeight = containerRect.height || 66;
        const children = container.children || [];
        const scrollType: string = container.ariaLabel || "";

        for (const child of children) {
            const itemRect = child.getBoundingClientRect();
            const itemTop = itemRect.top;
            const itemHeight = itemRect.height;

            if (
                itemTop <= containerTop + containerHeight / 2 &&
                itemTop + itemHeight >= containerTop + containerHeight / 2
            ) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    const newDate: StateType = {
                        ...currentDate,
                        [scrollType]: Number(child.ariaLabel),
                    };
                    setCurrentDate(newDate);
                    props.onChange({
                        target: {
                            name: props.name,
                            value: new Date(
                                newDate.year,
                                newDate.month - 1,
                                newDate.day,
                                newDate.hour,
                                newDate.minute
                            ),
                        },
                    });
                }, 500);
                return;
            }
        }
    };

    return (
        <Picker $error={props.error}>
            <div className="picker-window"></div>
            <div className="picker-triangle"></div>
            <ul aria-label="day" onScroll={handleScroll} ref={dayRef}>
                {days.map((day) => (
                    <li
                        key={day.getDate()}
                        aria-label={day.getDate().toString()}
                    >
                        {formatDate(day, "EEE d")}
                    </li>
                ))}
            </ul>
            <ul aria-label="month" onScroll={handleScroll} ref={monthRef}>
                {Array.from({ length: 12 }).map((_, index) => (
                    <li key={index} aria-label={(index + 1).toString()}>
                        {formatDate(new Date(currentDate.year, index), "MMM")}
                    </li>
                ))}
            </ul>
            <ul aria-label="year" onScroll={handleScroll} ref={yearRef}>
                {generateYears(currentDate.year).map((year) => (
                    <li key={year} aria-label={year.toString()}>
                        {year}
                    </li>
                ))}
            </ul>
            <ul aria-label="hour" onScroll={handleScroll} ref={hourRef}>
                {Array.from({ length: 24 }).map((_, index) => (
                    <li key={index} aria-label={index.toString()}>
                        {index.toString().padStart(2, "0")}
                    </li>
                ))}
            </ul>
            <span>:</span>
            <ul aria-label="minute" onScroll={handleScroll} ref={minuteRef}>
                {Array.from({ length: 60 }).map((_, index) => (
                    <li key={index} aria-label={index.toString()}>
                        {index.toString().padStart(2, "0")}
                    </li>
                ))}
            </ul>

            {props.helperText && <p>{props.helperText}</p>}
        </Picker>
    );
};
