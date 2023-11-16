import { ReactNode } from "react";
import { Button as StyledButton } from "./Button";

interface ButtonProps {
    children: ReactNode,
    label: string,
    onClick: () => void,
    disabled?: boolean,
}

export const Button = (props: ButtonProps) => {
    return <StyledButton
        onClick={props.onClick}
        disabled={props.disabled}
    >
        <span></span>
        
        <p>{props.label}</p>

        {props.children}
    </StyledButton>
};