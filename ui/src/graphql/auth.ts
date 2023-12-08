import { gql } from "@apollo/client";

export const REGISTER = gql`
    mutation Register($email: String!, $password: String!) {
        register(authInput: { email: $email, password: $password }) {
            accessToken
            refreshToken
        }
    }
`;

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(authInput: { email: $email, password: $password }) {
            accessToken
            refreshToken
        }
    }
`;

export const REFRESH = gql`
    mutation Refresh($refreshToken: String!) {
        refresh(refreshInput: { refreshToken: $refreshToken }) {
            accessToken
            refreshToken
        }
    }
`;