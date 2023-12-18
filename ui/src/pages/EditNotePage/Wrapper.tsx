import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 37px;
    margin-top: 20px;

    display: flex;
    flex-direction: column;

    .edit-left-side {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
    }

    @media (min-width: 1200px) {
        flex-direction: row;

        .edit-left-side {
            flex: 1;
            margin-bottom: 0;
            margin-right: 10px;
        }

        .edit-right-side {
            flex: 1;
            margin-left: 10px;
        }
    }
`;