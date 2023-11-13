import { gql } from "@apollo/client";

// export const GET_NOTES = gql`
//     query {
//         notes(getNotesArgs: { page: 1, limit: 2 }) {
//             notes {
//                 id,
//             },
//             totalItems,
//             totalPages,
//             currentPage,
//             limit,
//             prevPage,
//             nextPage,
//         }
//     }
// `;

export const GET_NOTES = gql`
    query GetNotes {
        notes {
            notes {
                id,
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
