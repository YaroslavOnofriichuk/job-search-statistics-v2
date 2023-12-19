import { ChangeEvent } from "react";
import { Area } from "./Area";

interface TextAreaProps {
    name: string,
    placeholder?: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    error?: boolean,
    helperText?: string | null,
    rows?: number,
    cols?: number,
}

export const TextArea = (props: TextAreaProps) => {
    return <Area $error={props.error}>
        <button 
            type="button"
            disabled={true}
        >
        </button>
        
        <textarea 
            placeholder={props.placeholder || ""}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            rows={props.rows || 5}
            cols={props.cols || 40}
        />

        {props.helperText && <p>{props.helperText}</p>}
    </Area>
};