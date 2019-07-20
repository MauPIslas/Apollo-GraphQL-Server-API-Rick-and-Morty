import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        episode(id: ID!): Episode
        episodes: [Episode!]!
    }

    extend type Mutation {
        createEpisode(name: String!, air_date: String!, episode: String!, characters: [String]! ): Episode!
    }
    
    type Episode {
        id: ID!
        name: String!
        air_date: String!
        episode: String!
        characters: [String]!
        created: String
    }
`
