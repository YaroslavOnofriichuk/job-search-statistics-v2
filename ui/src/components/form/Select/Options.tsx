import styled, { keyframes } from "styled-components";

interface OptionsProps {
    size?: "small" | "big",
    $error?: boolean,
}

const fadein = keyframes`
 from {opacity: 0;}
    to {opacity: 1;}
`;

export const Options = styled.ul<OptionsProps>`
    width: 100%;
    max-height: 140px;
    overflow-y: scroll;
    max-width: ${({ size }) => (size === "big" ? "350px" : "85px")};
    border: 2px solid ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.body.primary};
    border-radius: ${({ size }) => (size === "big" ? "25px" : "14px")};
    background: ${({ theme }) => theme.colors.body.primary};
    color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.primary};
    position: absolute;
    top: ${({ size }) => (size === "big" ? "60px" : "35px")};
    left: 0;
    z-index: 2;
    padding: ${({ size }) => (size === "big" ? "12px" : "7px 12px")};
    transition: .5s;

    -webkit-animation: ${fadein} 0.5s;
    animation: ${fadein} 0.5s;

    & li {
        list-style: none;
        cursor: pointer;
        transition: .5s;

        &:not(:last-child) {
            margin-bottom: 10px;
        }

        &:hover, &:focus {
            color: ${({ theme }) => theme.colors.text.primary};
        }
    }

    & li.selected {
        color: ${({ theme }) => theme.colors.text.accent};
    }

    &:hover, &:focus {
        background: ${({ theme }) => theme.colors.body.secondary};
        color: ${({ theme }) => theme.colors.text.secondary};
    }
`;
