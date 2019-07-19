import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        user(id: ID!): User
        users: [User!]!
    }

    extend type Mutation {
        signUp(email: String!, name: String!, username: String!, password: String!): User
    }

    type User {
        id: ID!
        name: String!
        username: String!
        password: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    }
`
