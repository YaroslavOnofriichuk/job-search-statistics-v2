import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from{ transform: rotate(-90deg); }
    to{ transform: rotate(90deg); }
`;

export const Button = styled.button`
    width: 60px;
    height: 60px;
    background: ${({theme}) => theme.colors.body.secondary};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;

    svg {
        fill: ${({theme}) => theme.colors.text.primary}; 
        transition: .5s;
    }

    &:hover, &:focus {
        svg {
            fill: ${({theme}) => theme.colors.text.secondary}; 
        }
    }

    &.active {
        svg {
            animation-name: ${rotate};
            animation-duration: 1s;
            animation-iteration-count: 1;
            animation-timing-function: linear;
        }
    }
`;
