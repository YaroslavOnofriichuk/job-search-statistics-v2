import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;
    padding: 7px 18px;
    border: 2px solid ${({ theme }) => theme.colors.body.primary};
    border-radius: 20px;
    background-color: transparent;
    white-space: nowrap; 
    transition: .5s;

    &[aria-current="page"] {
        background-color: ${({ theme }) => theme.colors.text.accent};
        height: 35px;
        border-radius: 14px;
    }

    .active, .pending {
        background-color: ${({ theme }) => theme.colors.text.accent};
    }

    &:hover, &:focus {
        color: ${({theme}) => theme.colors.text.secondary};
    }
`;
