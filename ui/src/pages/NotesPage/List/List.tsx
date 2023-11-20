import styled from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
        list-style: none;
        margin: 0 0 20px 0;
        padding: 0;
        width: 100%;
        max-width: 600px;
    }

    a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text.primary};
        background: ${({ theme }) => theme.colors.body.primary};  
        border: 2px solid ${({ theme }) => theme.colors.body.primary};
        border-radius: 25px;
        font-family: 'Oswald', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 1.2;

        display: flex;
        flex-direction: column;
        align-items: center;

        overflow: hidden;
        transition: .5s;

        &:hover, &:focus {
            color: ${({ theme }) => theme.colors.text.secondary};
            background: ${({ theme }) => theme.colors.body.secondary};  
        }
    }

    p {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:nth-child(odd) {
            font-weight: 700;
        }
    }
`;
