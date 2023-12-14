import { useState, ChangeEvent } from "react";
import { Wrapper } from "../Wrapper";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons";
import { Options } from "./Options";
import { useOutsideClick } from "../../../hooks";

type Option = {
    label: string;
    value: string;
};

interface SelectProps {
    name: string;
    placeholder?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    options: Option[];
    size?: "small" | "big";
    error?: boolean;
    helperText?: string | null;
}

export const Select = (props: SelectProps) => {
    const [open, setOpen] = useState(false);
    const ref = useOutsideClick<HTMLUListElement>(() => setOpen(false));

    const handleClick = (value: string) => {
        props.onChange({
            //@ts-ignore
            target: {
                name: props.name,
                value,
            },
        });
        setOpen(false);
    };

    return (
        <Wrapper size={props.size} $error={props.error}>
            <button type="button" onClick={() => setOpen(!open)}>
                {open ? (
                    <ArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
                ) : (
                    <ArrowRightIcon sx={{ transform: "rotate(90deg)" }} />
                )}
            </button>

            <input
                type="text"
                placeholder={props.placeholder || ""}
                name={props.name}
                value={props.value}
                onClick={() => setOpen(!open)}
                readOnly
            />

            {props.helperText && <p>{props.helperText}</p>}

            {open && <Options size={props.size} $error={props.error} ref={ref}>
                {(props.options || []).map(option => (
                    <li 
                        key={option.value} 
                        className={props.value === option.value ? "selected" : ""}
                        onClick={() => handleClick(option.value)}
                    >
                        {option.label}
                    </li>
                ))}
            </Options>}
        </Wrapper>
    );
};
