import styled from "styled-components";

export const Header = styled.header`
    background-color: ${({ theme }) => theme.colors.body.secondary};

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    z-index: 1000;
    overflow: hidden;

    transition: .5s;

    nav {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;

        @media (min-width: 767px) {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            padding-left: 5px;

            li {
                margin: 10px 0;
            }
        }
    }

    @media (min-width: 767px) {
        flex-direction: column;
        width: 100px;
        min-height: 100vh;

        &:hover, &:focus {
            width: 250px;
        }
    }
`;
