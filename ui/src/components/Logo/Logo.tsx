import styled from "styled-components";

export const Logo = styled.div`
    color: ${({ theme }) => theme.colors.text.primary};
    width: 60px;
    height: 60px;
    border: 5px solid ${({ theme }) => theme.colors.text.primary};
    border-radius: 50%;

    position: relative;

    span {
        color: ${({ theme }) => theme.colors.text.primary};
        position: relative;
        font-weight: 700;
        font-size: 24px;
    }

    .j {
        left: 5px;
        bottom: -10px;
    }

    .s-one {
        left: 7px;
        bottom: -2px;
    }

    .s-two {
        left: 10px;
        bottom: 3px;
    }

    svg {
        position: absolute;
        left: 7px;
        bottom: 5px;

        width: 40px;

        fill: ${({ theme }) => theme.colors.text.accent};
    }
`;
