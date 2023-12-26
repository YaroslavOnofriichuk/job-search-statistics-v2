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
`;
