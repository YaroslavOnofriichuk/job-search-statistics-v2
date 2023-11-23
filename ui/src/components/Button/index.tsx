import { ReactNode } from "react";
import { Button as StyledButton } from "./Button";

interface ButtonProps {
    children: ReactNode,
    label: string,
    onClick?: () => void,
    disabled?: boolean,
    size?: "small" | "big",
    type?: "button" | "submit" | "reset",
}

export const Button = (props: ButtonProps) => {
    return <StyledButton
        onClick={props.onClick || (() => {})}
        disabled={props.disabled}
        size={props.size}
        type={props.type || "button"}
    >
        {props.size === "big" && <span></span>}
        
        <p>{props.label}</p>

        {props.size === "big" && props.children}
    </StyledButton>
};