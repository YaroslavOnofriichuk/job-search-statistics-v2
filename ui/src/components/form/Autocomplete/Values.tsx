import styled from "styled-components";

export const Values = styled.ul`
    width: 100%;
    max-width: 350px;
    margin: 0 0 10px 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    & li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    & button {
        transition: .5s;
        color: ${({ theme }) => theme.colors.text.primary};
        border: none;
        outline: none;
        cursor: pointer;
        background: transparent;
        padding: 3px;
        position: relative;

        &:hover, &:focus {
            color: ${({ theme }) => theme.colors.text.secondary};

            &::after { 
                content: "x";
                position: absolute;
                top: 0;
                right: -2px;
                display: block;
                width: 5px;
                height: 5px;
                color: ${({ theme }) => theme.colors.text.secondary};
            }
        }
    }
`;
