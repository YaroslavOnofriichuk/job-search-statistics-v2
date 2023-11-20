import styled from "styled-components";

export const Bar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    ul {
        margin: 0 10px;
        padding: 0;
        display: flex;
        align-items: center;

        li {
            margin: 0;
            padding: 0;
            list-style: none;

            &:not(:last-child) {
                margin-right: 10px;
            }
        }
    }
`;
