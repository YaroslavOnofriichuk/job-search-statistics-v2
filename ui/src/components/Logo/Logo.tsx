import styled from "styled-components";

export const Logo = styled.div`
    color: ${({ theme }) => theme.colors.text.primary};
    width: 75px;
    height: 75px;
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
        left: -10px;
        bottom: 2px;
    }

    .s-one {
        left: -5px;
        bottom: 12px;
    }

    .s-two {
        left: 0px;
        bottom: 17px;
    }

    svg {
        position: absolute;
        left: 15px;
        bottom: 10px;

        width: 40px;

        fill: ${({ theme }) => theme.colors.text.primary};
    }
`;
