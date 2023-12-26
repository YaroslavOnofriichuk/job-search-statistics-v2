import { ChangeEvent, useState, KeyboardEvent } from "react";
import { Wrapper } from "../Wrapper";
import { Options } from "../Options";
import { Values } from "./Values";

type Option = {
    label: string;
    value: string;
};

type Event = {
    target: {
        value: string[];
        name: string;
    };
};

interface AutocompleteProps {
    name: string;
    placeholder?: string;
    value: string[];
    onChange: (event: Event) => void;
    options: Option[];
    error?: boolean;
    helperText?: string | null;
}

export const Autocomplete = (props: AutocompleteProps) => {
    const [newValue, setNewValue] = useState("");

    const handleAddValue = (value: string) => {
        props.onChange({
            target: {
                name: props.name,
                value: [...props.value, value.trim()],
            },
        });
        setNewValue("");
    };

    const handleDeleteValue = (value: string) => {
        props.onChange({
            target: {
                name: props.name,
                value: props.value.filter((val) => val.trim() !== value.trim()),
            },
        });
        setNewValue("");
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewValue(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        event.stopPropagation()
        if (event.key === "Enter") {
            props.onChange({
                target: {
                    name: props.name,
                    value: [...props.value, event.currentTarget.value.trim()],
                },
            });
        }
    };

    const getOptions = () => {
        if (newValue.trim().length > 0) {
            return props.options.filter((option) =>
                option.value
                    .toLowerCase()
                    .includes(newValue.trim().toLowerCase())
            );
        }

        return [];
    };

    return (
        <>
            {props.value.length > 0 && (
                <Values>
                    {props.value.map((val) => (
                        <li key={val}>
                            <button
                                type="button"
                                onClick={() => handleDeleteValue(val)}
                            >
                                #{val}
                            </button>
                        </li>
                    ))}
                </Values>
            )}
            <Wrapper size="big" $error={props.error}>
                <button type="button" disabled></button>

                <input
                    type="text"
                    placeholder={props.placeholder || ""}
                    name={props.name}
                    value={newValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                />

                {props.helperText && <p>{props.helperText}</p>}

                {getOptions().length > 0 && (
                    <Options size="big" $error={props.error}>
                        {getOptions().map((option) => (
                            <li
                                key={option.value}
                                className={
                                    props.value.includes(option.value)
                                        ? "selected"
                                        : ""
                                }
                                onClick={() => handleAddValue(option.value)}
                            >
                                {option.label}
                            </li>
                        ))}
                    </Options>
                )}
            </Wrapper>
        </>
    );
};
