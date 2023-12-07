import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 37px;
    background-color: ${({ theme }) => theme.colors.body.primary};  
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .auth-left-side {
        width: 100%;
        max-width: 446px;
        border-radius: 37px;
        background-color: ${({ theme }) => theme.colors.body.secondary};  
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    .auth-title {
        margin-bottom: 10px;
    }

    .auth-subtitle {
        margin-bottom: 20px;
    }

    .auth-tabs {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }


    @media (min-width: 1200px) {
        flex-direction: row;

        .auth-left-side {
            flex: 1;
            max-width: 100%;
            margin-bottom: 0;
            margin-right: 10px;
        }

        .auth-right-side {
            flex: 1;
            margin-left: 10px;
        }
    }
`;
