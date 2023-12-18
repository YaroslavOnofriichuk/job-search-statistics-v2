import styled from "styled-components";

export const Info = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 37px;
    margin-top: 20px;

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

        &:last-of-type {
            background-color: ${({ theme }) => theme.colors.text.error};

            &:hover, &:focus {
                background-color: ${({ theme }) => theme.colors.body.secondary};

                & svg {
                    fill: ${({ theme }) => theme.colors.text.secondary};
                }

                & p {
                    color: ${({ theme }) => theme.colors.text.secondary};
                }
            }
        }
    }

    @media (min-width: 767px) {
        & > div, & > form > div {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;