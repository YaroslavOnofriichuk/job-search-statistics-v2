import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    width: 100%;
    max-width: 150px;
    height: 50px;
    padding: 7px 18px;
    background-color: ${({ theme }) => theme.colors.text.accent};
    border: 2px solid ${({ theme }) => theme.colors.body.primary};
    border-radius: 20px;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap; 
    transition: .5s;
    color: ${({ theme }) => theme.colors.text.primary};

    &:hover, &:focus {
        background-color: ${({ theme }) => theme.colors.body.secondary};
        color: ${({ theme }) => theme.colors.text.secondary};
    }

    &:disabled {
        cursor: none;
        pointer-events: none;
        backdrop-filter: blur(10px);
    }
`;
