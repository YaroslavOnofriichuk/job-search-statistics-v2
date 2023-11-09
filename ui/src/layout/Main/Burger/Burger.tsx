import styled from 'styled-components';

export const Button = styled.button`
    position: relative;
    width: 70px;
    height: 70px;
    background: ${({theme}) => theme.colors.body.secondary};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    border: none;
    outline: none;
    transition: .5s;

    span {
        position: absolute;
        width: 40px;
        height: 4px;
        border-radius: 4px;
        background: ${({theme}) => theme.colors.text.primary};
        transition: 0.5s;
    }

    span:nth-child(2) {
        transform: translateY(-15px);
        width: 25px;
        left: 15px;
    }

    span:nth-child(3) {
        transform: translateY(15px);
        width: 15px;
        left: 15px;
    }

    &.active span:nth-child(1) {
        transform: translateX(60px);
    }

    &.active span:nth-child(2) {
        width: 40px;
        transform: translateX(0) rotate(45deg);
        transition-delay: 0.2s;
    }

    &.active span:nth-child(3) {
        width: 40px;
        transform: translateX(0) rotate(-45deg);
        transition-delay: 0.4s;
    }

    &:hover, &:focus {
        span {
            background: ${({theme}) => theme.colors.text.secondary};
        }
    }
`;
