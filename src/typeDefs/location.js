import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        location(id: ID!): Location
        locations: [Location!]!
    }

    extend type Mutation {
        createLocation(
          id: String!
          name: String!,
          type: String,
          dimension: String,
          residents: [String],
          created: String
        ): Location!
    }
    
    type Location {
        id: ID!
        name: String,
        type: String,
        dimension: String,
        residents: [Character]!,
        created: String
    }
`
