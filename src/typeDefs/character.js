import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        character(id: ID!): Character
        characters(page: Int ): Characters!
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

    type Characters {
        info: Info
        results: [Character]!
    }
    
    type Character {
        id: ID!
        name: String,
        status: String,
        species: String,
        type: String,
        gender: String,
        origin: Location,
        location: Location,
        image: String,
        episode: [Episode!]!,
        created: String
    }


`
