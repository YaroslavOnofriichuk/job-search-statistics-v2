import styled from "styled-components";

interface HeaderProps {
    open: boolean;
}

export const Header = styled.header<HeaderProps>`
    background-color: ${props => props.theme.colors.body.primary};

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    position: fixed;
    left: ${props => (props.open ? "0" : "-108px")};
    top: 0;
    width: ${props => (props.open ? "252px" : "108px")};
    height: 100%;
    overflow: hidden;

    transition: .5s;

    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .logo-wrapper {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid ${props => props.theme.colors.body.secondary};
        margin-bottom: 34px;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;

        li {
            display: flex;
            align-items: center;
            justify-content: center; 
            width: 100%;
            padding: 0 24px;
        }
    }

    @media (min-width: 767px) {
        left: 0;
    }
`;
