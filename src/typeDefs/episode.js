import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        episode(id: ID!): Episode
        episodes(page: Int): Episodes!
    }

    extend type Mutation {
        createEpisode(
            name: String!, 
            air_date: String!, 
            episode: String!, 
            characters: [String]!
            ): Episode!
    }
    type Episodes {
        info: Info
        results: [Episode]!
    }
    
    type Episode {
        id: ID!
        name: String!
        air_date: String!
        episode: String!
        characters: [Character!]!
        created: String
    }
`
