import styled from "styled-components";

export const Button = styled.button`
    width: 45px;
    height: 45px;
    background: ${({ theme }) => theme.colors.body.primary};
    border-radius: 14px;
    cursor: pointer;
    border: none;
    outline: none;
    position: relative;

    .leftright{
        height: 4px;
        width: 25px;
        position: absolute;
        left: 22%;
        top: 0;
        margin-top: 20px;
        background-color: ${({ theme }) => theme.colors.text.primary};
        border-radius: 2px;
        transform: rotate(45deg);
        transition: all .3s ease-in;
    }

    .rightleft{
        height: 4px;
        width: 25px;
        position: absolute;
        right: 22%;
        top: 0;
        margin-top: 20px;
        background-color: ${({ theme }) => theme.colors.text.primary};
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all .3s ease-in;
    }

    &:hover .leftright{
        transform: rotate(-45deg);
        background-color: ${({ theme }) => theme.colors.text.secondary};
    }

    &:hover .rightleft{
        transform: rotate(45deg);
        background-color: ${({ theme }) => theme.colors.text.secondary};
    }

    &:focus .leftright{
        transform: rotate(-45deg);
        background-color: ${({ theme }) => theme.colors.text.secondary};
    }

    &:focus .rightleft{
        transform: rotate(45deg);
        background-color: ${({ theme }) => theme.colors.text.secondary};
    }
`;
