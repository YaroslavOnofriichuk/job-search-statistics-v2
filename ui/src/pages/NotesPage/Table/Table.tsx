import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    thead {
        border-bottom: 2px solid ${({ theme }) => theme.colors.text.secondary};
    }

    th, td {
        padding: 12px 15px;
        color: ${({ theme }) => theme.colors.text.primary};
        text-align: left;
        transition: .5s;
    }

    tbody {
        tr {
            transition: .5s;
            cursor: pointer;
        }

        tr:hover, tr:focus {
            background-color: ${({ theme }) => theme.colors.body.primary};

            th, td {
                color: ${({ theme }) => theme.colors.text.secondary};
            }
        }
    }
`;
