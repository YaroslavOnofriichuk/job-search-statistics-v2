import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 350px;
    height: 64px;
    border: 2px solid ${({ theme }) => theme.colors.body.primary};
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.body.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    /* position: relative;
    z-index: 1; */
    display: flex;
    align-items: center;
    padding: 10px;
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
                fill: ${({ theme }) => theme.colors.text.primary};
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
            background-color: ${({ theme }) => theme.colors.text.secondary};
        }
    }

    & input {
        background: transparent;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.colors.text.primary};
        font-family: 'Oswald', sans-serif;
        font-size: 14px;

        &::placeholder {
            color: ${({ theme }) => theme.colors.text.secondary};
        }
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
