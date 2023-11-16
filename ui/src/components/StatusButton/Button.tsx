import styled from "styled-components";

interface ButtonProps {
    color: string;
}

export const Button = styled.button<ButtonProps>`
    height: 35px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 7px 13px;
    transition: .5s;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.body.primary};
    color: ${props => props.color};
    box-shadow: inset 0 0 10px 2px ${props => props.color};

    &:hover, &:focus {
        color: ${props => props.theme.colors.text.secondary};
        background-color: ${props => props.theme.colors.body.secondary};
        box-shadow: inset 0 0 10px 2px ${props => props.theme.colors.body.secondary};
    }

    &:disabled {
        cursor: none;
        pointer-events: none;
    }

    &[aria-checked=true] {
        color: ${props => props.theme.colors.text.primary};
        background-color: ${props => props.theme.colors.text.accent};
        box-shadow: none;
    }
`;
