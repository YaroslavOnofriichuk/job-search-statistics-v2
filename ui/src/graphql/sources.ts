import { gql } from "@apollo/client";

export const GET_SOURCES = gql`
    query GetSources {
        sources {
            id
            name
        }
    }
`;

export const GET_SOURCES_STATISTIC = gql`
    query GetSourcesStatistic {
        sourcesStatistic {
            id
            name
            ACCEPTED
            REJECTED
            CONSIDERED
            SENT
            TEST_TASK
            INTERVIEW
        }
    }
`;
