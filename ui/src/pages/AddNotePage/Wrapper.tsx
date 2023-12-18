import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 37px;

    .page-form {
        margin: 0 auto;
        width: 100%;
        max-width: 446px;
        border-radius: 37px;
        background-color: ${({ theme }) => theme.colors.body.primary}; 
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    .page-title {
        margin: 10px auto;
        text-align: center;
    }
`;
