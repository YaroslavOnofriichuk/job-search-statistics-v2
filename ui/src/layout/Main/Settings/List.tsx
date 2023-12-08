import styled, { keyframes } from 'styled-components';

const move = keyframes`
    from {transform: translateX(0px);}
    to {transform: translateX(200px);}
`;

export const List = styled.ul`
    width: 100%;
    padding: 0;
    margin: 0;

    li {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${(props) => props.theme.colors.text.secondary}; 
    }

    .language-button {
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        outline: none;
        overflow: hidden;
        color: ${(props) => props.theme.colors.text.primary};
        transition: .5s;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        div:last-of-type {
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                fill: ${(props) => props.theme.colors.text.primary};
                transition: .5s;
            }
        }

        &:active {
            p, div:first-child {
                animation-name: ${move};
                animation-duration: 1s;
                animation-iteration-count: 1;
                animation-timing-function: linear;
            }
        }
        
        &:hover, &:focus {
            color: ${(props) => props.theme.colors.text.secondary};

            svg {
                fill: ${(props) => props.theme.colors.text.secondary};
            }
        }
    }
`;
