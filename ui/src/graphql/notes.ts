import { gql } from "@apollo/client";

export const GET_NOTES = gql`
    query GetNotes($page: Int, $limit: Int, $sort: String, $status: String, $search: String) {
        notes(getNotesArgs: { page: $page, limit: $limit, sort: $sort, status: $status, search: $search }) {
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