import styled from "styled-components";

export const Info = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 37px;

    display: flex;
    flex-direction: column;

    & > div, & > form > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 20px;

        & > a {
            color: ${({ theme }) => theme.colors.text.primary};
        }
    }

    & > form > div > button {
        margin: 0 20px;
    }

    .info-modal {
        width: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
    }

    @media (min-width: 767px) {
        & > div, & > form > div {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;