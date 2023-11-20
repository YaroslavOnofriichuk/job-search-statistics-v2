import styled from "styled-components";

interface ButtonProps {
    size?: "small" | "big",
}

export const Button = styled.button<ButtonProps>`
    width: 100%;
    max-width: ${({ size }) => (size === "big" ? "350px" : "85px")};
    height: ${({ size }) => (size === "big" ? "60px" : "35px")};
    padding: ${({ size }) => (size === "big" ? "12px" : "7px 12px")};
    background-color: ${({ theme }) => theme.colors.text.accent};
    border: 2px solid ${({ theme }) => theme.colors.body.primary};
    border-radius: ${({ size }) => (size === "big" ? "25px" : "14px")};
    cursor: pointer;
    outline: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;

    & p {
        color: ${({ theme }) => theme.colors.text.primary};
        transition: .5s;
        font-size: ${({ size }) => (size === "big" ? "18px" : "10px")};
    }

    & div {
        width: 34px;
        height: 34px;
        position: absolute;
        top: 12px;
        right: 16px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.2);
    }

    & svg {
        fill: ${({ theme }) => theme.colors.text.primary};
        transition: .5s;
    }

    &:hover, &:focus {
        background-color: ${({ theme }) => theme.colors.body.secondary};

        & svg {
            fill: ${({ theme }) => theme.colors.text.secondary};
        }

        & p {
            color: ${({ theme }) => theme.colors.text.secondary};
        }
    }

    &:disabled {
        cursor: none;
        pointer-events: none;
        backdrop-filter: blur(10px);
    }
`;
