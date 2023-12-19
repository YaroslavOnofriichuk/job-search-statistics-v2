import { gql } from "@apollo/client";

export const GET_STATUSES_HISTORY = gql`
    query GetNStatusesHistory($noteId: Int!) {
        statusesHistory(noteId: $noteId) {
            id
            status
            description
            createdAt
        }
    }
`;
