import styled from "styled-components";

export const Line = styled.ul`
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 3px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.text.primary};
        top: 0;
        left: 50%;
    }

    & li {
        padding: 20px;
        max-width: 50%;
        position: relative;

        &:nth-child(odd) {
            transform: translateX(50%);
            text-align: left;

            &::before {
                content: '';
                position: absolute;
                width: 15px;
                height: 3px;
                background-color: ${({ theme }) => theme.colors.text.primary};
                top: 50%;
                left: 1px;
            }
        }

        &:nth-child(even) {
            transform: translateX(-50%);
            text-align: right;

            &::after {
                content: '';
                position: absolute;
                width: 15px;
                height: 3px;
                background-color: ${({ theme }) => theme.colors.text.primary};
                top: 50%;
                right: -1px;
            }
        }
    }
`;
