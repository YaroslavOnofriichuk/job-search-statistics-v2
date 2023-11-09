import styled from 'styled-components';

interface MainProps {
    open: boolean;
}

export const Main = styled.main<MainProps>`
    transition: .5s;
    padding-left: ${props => (props.open ? "252px" : "0px")};
    width: 100vw;
    overflow: hidden;

    .head {
        width: 100%;
        height: 60px;
        padding: 0 10px;
        background-color: ${props => props.theme.colors.body.primary};
        position: sticky;
        top: 0;
        right: 0;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content {
        padding: 10px;
        height: 100px;
    }

    @media (min-width: 767px) {
        padding-left: ${props => (props.open ? "252px" : "108px")};

        .head {
            padding: 0 20px;
            height: 100px;
        }

        .content {
            padding: 20px;
        }
    }
`;
