import { gql } from 'apollo-server-express'
// import Episode from './episode'

export default gql`
    extend type Query {
        character(id: ID!): Character
        characters: [Character!]!
    }

    extend type Mutation {
        createCharacter(
          id: String!,
          name: String!,
          status: String,
          species: String,
          type: String,
          gender: String,
          origin: String,
          location: String,
          image: String!,
          episode: [String!]!
        ): Character!
    }
    
    type Character {
        id: ID!
        name: String,
        status: String,
        species: String,
        type: String,
        gender: String,
        origin: String,
        location: String,
        image: String,
        episode: [Episode!]!,
        created: String
    }
`
