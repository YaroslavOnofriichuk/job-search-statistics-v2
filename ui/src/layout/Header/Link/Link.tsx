import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 50px;
    padding-left: 17px;
    border-radius: 20px;
    background-color: transparent;

    div {
        color: ${({ theme }) => theme.colors.text.primary};
        transition: .5s;
        width: 24px;
        height: 24px;

        svg {
            transition: .5s;
        }
    }

    p {
        margin-left: 14px;
        transition: .5s;
        font-size: 18px;
        font-weight: 300;
    }

    &[aria-current="page"] {
        background-color: ${({ theme }) => theme.colors.text.accent};
    }

    .active, .pending {
        background-color: ${({ theme }) => theme.colors.text.accent};
    }

    &:hover, &:focus {
        svg {
            fill: ${({theme}) => theme.colors.text.secondary};
        }

        p {
            color: ${({theme}) => theme.colors.text.secondary};
        }
    }
`;
