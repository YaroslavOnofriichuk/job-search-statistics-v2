import { gql } from "@apollo/client";

export const GET_NOTES = gql`
    query GetNotes($page: Int, $limit: Int) {
        notes(getNotesArgs: { page: $page, limit: $limit }) {
            notes {
                id,
                createdAt,
                position,
                company,
                source {
                    name,
                },
                description,
                status,
            },
            totalItems,
            totalPages,
            currentPage,
            limit,
            prevPage,
            nextPage,
        }
    }
`;