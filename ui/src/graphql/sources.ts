import { gql } from "@apollo/client";

export const GET_SOURCES = gql`
    query GetSources {
        sources {
            id
            name
        }
    }
`;
