import styled from 'styled-components';

interface SwitchProps {
    $isDark: boolean;
}

export const Switch = styled.button<SwitchProps>`
    cursor: pointer;
    border: none;
    outline: none;
    background: ${props => props.theme.colors.body.primary};
    border-radius: 14px;
    padding: 7px;

    .theme-switch-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
    }

    .theme-switch-control {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px;
        border-radius: 14px;

        & div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & svg {
            fill: ${props => props.theme.colors.text.primary};
            transition: .5s;
        }

        & p {
            color: ${props => props.theme.colors.text.primary};
            margin-left: 8px;  
            transition: .5s;
        }
    }

    .light {
        background: ${props => (props.$isDark ? "transparent" : props.theme.colors.text.accent)};
        transition: .5s;

    }

    .dark {
        background: ${props => (props.$isDark ?  props.theme.colors.text.accent : "transparent")};
        transition: .5s;
    }

    &:hover, &:focus {        
        & svg {
            fill: ${props => props.theme.colors.text.secondary};
        }

        & p {
            color: ${props => props.theme.colors.text.secondary};
        }
    }
`;
