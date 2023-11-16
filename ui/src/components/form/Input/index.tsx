import { useState, ChangeEvent } from "react";
import { Wrapper } from "../Wrapper";
import { getIcon } from "./getIcon";

interface InputProps {
    type: string,
    name: string,
    placeholder?: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const Input = (props: InputProps) => {
    const [type, setType] = useState(props.type === "password" ? "password" : "text");

    return <Wrapper>
        <button 
            type="button"
            disabled={props.type !== "password"}
            onClick={() => setType(type === "password" ? "text" : "password")}
        >
            {getIcon(props.type === "password" ? type : props.type)}
        </button>
        
        <input 
            type={props.type === "password" ? type : props.type}
            placeholder={props.placeholder || ""}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    </Wrapper>
};