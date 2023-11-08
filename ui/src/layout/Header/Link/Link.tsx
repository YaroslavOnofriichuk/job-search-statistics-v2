import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    padding-top: 5px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative; 
        width: 90px;
        height: 90px;
        text-align: center;
        line-height: 63px;
        background: ${({ theme }) => theme.colors.body.primary};
        border-radius: 50%;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.body.primary};
        transition: .5s;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.body.accent};
            transition: .5s;
            transform: scale(.9);
            z-index: -1;
        }
    }

    &:hover, &:focus {
        color: ${({ theme }) => theme.colors.text.accent};

        svg {
            fill: ${({ theme }) => theme.colors.text.accent};
        }

        div::before {
            transform: scale(1.1);
            box-shadow: 0 0 15px ${({ theme }) => theme.colors.body.accent};
        }

        div {
            color: ${({ theme }) => theme.colors.body.accent};
            box-shadow: 0 0 5px ${({ theme }) => theme.colors.body.accent};
            text-shadow: 0 0 5px ${({ theme }) => theme.colors.body.accent};
            border-color: ${({ theme }) => theme.colors.body.accent};
        }

        span {
            color: ${({ theme }) => theme.colors.body.accent};
        }
    }

    p {
        margin-top: 26px;
    }

    @media (min-width: 767px) {
        flex-direction: row;
        align-items: center;
        p {
            margin-top: 0;
            margin-left: 26px;
        }   
    }

    .active, .pending {
        color: ${({ theme }) => theme.colors.text.accent};

        svg {
            fill: ${({ theme }) => theme.colors.body.accent};
        }
    }
`;
