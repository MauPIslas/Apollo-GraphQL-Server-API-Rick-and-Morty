import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Episode } from '../models'

export default {
  Query: {
    episodes: (root, args, context, info) => {
      return Episode.find({})
    },
    episode: (root, { id }, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid episode ID.`)
      }
      return Episode.findById(id)
    }
  },
  Mutation: {
    createEpisode: async (root, args, context, info) => {
      return Episode.create(args)
    }
  }
}
