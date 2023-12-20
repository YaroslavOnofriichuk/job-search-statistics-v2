import styled from "styled-components";

export const Calendar = styled.div`
    .fc-event {
        cursor: pointer;
    }

    .fc {
        --fc-border-color: ${({ theme }) => theme.colors.text.primary};
        --fc-now-indicator-color: yellow;
        --fc-today-bg-color: rgba(255, 255, 255, 0.2);
        --fc-page-bg-color: ${({ theme }) => theme.colors.body.primary};
        --fc-neutral-bg-color: ${({ theme }) => theme.colors.body.primary}; 
        --fc-list-event-hover-bg-color: ${({ theme }) => theme.colors.body.primary};
        --fc-highlight-color: yellowgreen;
    },

    .fc-button-primary {
        color: ${({ theme }) => theme.colors.text.primary};
        background-color: ${({ theme }) => theme.colors.text.accent};
        border: 2px solid ${({ theme }) => theme.colors.body.primary};
        border-radius: 14px;

        transition: .5s;

        &:disabled {
            cursor: none;
            pointer-events: none;
            background-color: rgba(255, 255, 255, 0.2);
        }

        &:hover, &:focus {
            background-color: ${({ theme }) => theme.colors.body.secondary};
            color: ${({ theme }) => theme.colors.text.secondary};
        }
    }
`;
