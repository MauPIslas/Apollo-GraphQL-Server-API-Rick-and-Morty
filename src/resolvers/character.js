import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Character } from '../models'

export default {
  Query: {
    characters: (root, args, context, info) => {
      return Character.find({})
    },
    character: (root, { id }, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid episode ID.`)
      }
      return Character.findById(id)
    }
  },
  Mutation: {
    createCharacter: async (root, args, context, info) => {
      return Character.create(args)
    }
  },
  Character: {
    episode: async (character, args, context, info) => {
      return (await character.populate('episode').execPopulate()).episode
    }
  }
}
