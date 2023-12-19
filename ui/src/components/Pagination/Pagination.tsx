import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50px;
        height: 50px;
        border-radius: 20px;
        background: ${({ theme }) => theme.colors.body.primary};
        transition: .5s;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        svg {
            fill: ${({ theme }) => theme.colors.text.primary};
            transition: .5s;
        }

        span {
            color: ${({ theme }) => theme.colors.text.primary};
            transition: .5s;
        }

        &:hover, &:focus {
            background: ${({ theme }) => theme.colors.body.secondary};

            svg {
                fill: ${({ theme }) => theme.colors.text.secondary};
            }

            span {
                color: ${({ theme }) => theme.colors.text.secondary};
            }
        }

        &:not(:last-child) {
            margin-right: 10px;
        }

        &:disabled {
            cursor: none;
            pointer-events: none;
            background: #9e9796;
        }

        &.active-pagination-button {
            background: ${({ theme }) => theme.colors.text.accent};
            pointer-events: none;
            cursor: none;
        }
    }
`;
