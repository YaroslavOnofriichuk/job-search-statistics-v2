import { gql } from "@apollo/client";

export const GET_NOTES = gql`
    query GetNotes(
        $page: Int
        $limit: Int
        $sort: String
        $status: String
        $search: String
    ) {
        notes(
            getNotesArgs: {
                page: $page
                limit: $limit
                sort: $sort
                status: $status
                search: $search
            }
        ) {
            notes {
                id
                createdAt
                position
                company
                source {
                    name
                }
                description
                status
            }
            totalItems
            totalPages
            currentPage
            limit
            prevPage
            nextPage
        }
    }
`;

export const GET_NOTE = gql`
    query GetNote($id: Int!) {
        note(id: $id) {
            id
            createdAt
            position
            company
            link
            source {
                name
            }
            description
            status
            tags {
                tag {
                    tag
                }
            }
        }
    }
`;

export const CREATE_NOTE = gql`
    mutation CreateNote(
        $position: String!
        $company: String!
        $link: String!
        $description: String
        $source: String!
        $status: String
        $createdAt: DateTime
        $tags: [String!]
    ) {
        createNote(
            createNoteInput: {
                position: $position
                company: $company
                link: $link
                description: $description
                source: $source
                status: $status
                createdAt: $createdAt
                tags: $tags
            }
        ) {
            id
        }
    }
`;


export const UPDATE_NOTE = gql`
    mutation UpdateNote(
        $id: Int!
        $position: String
        $company: String
        $link: String
        $description: String
        $source: String
        $status: String
        $createdAt: DateTime
        $tags: [String!]
    ) {
        updateNote(
            updateNoteInput: {
                id: $id
                position: $position
                company: $company
                link: $link
                description: $description
                source: $source
                status: $status
                createdAt: $createdAt
                tags: $tags
            }
        ) {
            id
        }
    }
`;