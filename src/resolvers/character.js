import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Character } from '../models'

export default {
  Query: {
    characters: async (root, { page }, context, info) => {
      const count = await Character.countDocuments()
      let pages = parseInt(count / 20) + 1
      if ((count % 20) === 0) {
        pages = count / 20
      }
      let prev = page - 1
      let documents = Character.find({}).limit(20).skip((page - 1) * 20)
      if (page === 1) {
        prev = null
        documents = Character.find({}).limit(20)
      }
      let next = page + 1
      if (page >= pages) {
        next = null
      }
      const char = {
        info: {
          prev: prev,
          next: next,
          count: count,
          pages: pages

        },
        results: documents
      }
      return char
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
    },
    origin: async (character, args, context, info) => {
      return (await character.populate('origin').execPopulate()).origin
    },
    location: async (character, args, context, info) => {
      return (await character.populate('location').execPopulate()).location
    }
  }
}
