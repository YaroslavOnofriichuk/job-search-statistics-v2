import styled from "styled-components";

interface WrapperProps {
    size?: "small" | "big",
    $error?: boolean,
}

export const Wrapper = styled.div<WrapperProps>`
    width: 100%;
    max-width: ${({ size }) => (size === "big" ? "350px" : "85px")};
    height: ${({ size }) => (size === "big" ? "60px" : "35px")};
    border: 2px solid ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.body.primary};
    border-radius: ${({ size }) => (size === "big" ? "25px" : "14px")};
    background: ${({ theme }) => theme.colors.body.primary};
    color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.primary};
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: ${({ size }) => (size === "big" ? "12px" : "7px 12px")};
    transition: .5s;

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        background: transparent;
        margin-right: 20px;
        position: relative;

        & div {
            display: flex;
            justify-content: center;
            align-items: center;

            & svg {
                fill: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.primary};
                transition: .5s;
            }
        }

        &:disabled {
            cursor: none;
            pointer-events: none;
        }

        &::after { 
            content: "";
            position: absolute;
            top: 5px;
            right: -10px;
            display: block;
            width: 2px;
            height: 13px;
            background-color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.secondary};
        }
    }

    & input {
        background: transparent;
        border: none;
        outline: none;
        color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.primary};
        font-family: 'Oswald', sans-serif;
        font-size: 14px;
        transition: .5s;

        &::placeholder {
            color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.secondary};
        }

        &:-internal-autofill-selected {
            background-image: none !important;
            background-color: transparent !important;
            color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.primary} !important;
        }
    }

    & p {
        font-size: 10px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text.error};
        position: absolute;
        left: 64px;
        bottom: 5px;
    }

    & input[type="search"]::-webkit-search-decoration,
    & input[type="search"]::-webkit-search-cancel-button,
    & input[type="search"]::-webkit-search-results-button,
    & input[type="search"]::-webkit-search-results-decoration { 
        display: none;
    }

    &:hover, &:focus {
        background: ${({ theme }) => theme.colors.body.secondary};
        color: ${({ theme }) => theme.colors.text.secondary};

        & svg {
            fill: ${({ theme }) => theme.colors.text.secondary};
        }

        & input {
            color: ${({ theme }) => theme.colors.text.secondary};
        }
    }
`;