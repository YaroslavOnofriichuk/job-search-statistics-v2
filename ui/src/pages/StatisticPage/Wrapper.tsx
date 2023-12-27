import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        max-width: 300px;
        margin: 0 0 20px 0;
        padding: 0;
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .chart-tooltip {
        width: 100%;
        height: 100%;
        max-width: 170px;
        max-height: 200px;
    }

    .chart-tooltip-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & p {
            padding: 0;
        }

        & p:first-of-type {
            margin-bottom: 10px;
        }
    }

    .pie {
        display: flex;
        flex-direction: column;
        align-items: center;

        & ul {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            margin: 0 auto 20px auto;
            padding: 0;

            & li {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            & button {
                transition: 0.5s;
                color: ${({ theme }) => theme.colors.text.primary};
                border: none;
                outline: none;
                cursor: pointer;
                background: transparent;
                padding: 3px;

                &:hover,
                &:focus {
                    color: ${({ theme }) => theme.colors.text.secondary};
                }
            }

            .pie-active-tag {
                color: ${({ theme }) => theme.colors.text.accent};
            }
        }
    }
`;
