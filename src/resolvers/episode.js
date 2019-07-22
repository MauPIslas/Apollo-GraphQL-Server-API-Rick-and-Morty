import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Episode } from '../models'

export default {
  Query: {
    episodes: async (root, { page }, context, info) => {
      const count = await Episode.countDocuments()
      let pages = parseInt(count / 20) + 1
      if ((count % 20) === 0) {
        pages = count / 20
      }
      let prev = page - 1
      let documents = Episode.find({}).limit(20).skip((page - 1) * 20)
      if (page === 1) {
        prev = null
        documents = Episode.find({}).limit(20)
      }
      let next = page + 1
      if (page >= pages) {
        next = null
      }
      const episode = {
        info: {
          prev: prev,
          next: next,
          count: count,
          pages: pages

        },
        results: documents
      }
      return episode
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
  },
  Episode: {
    characters: async (episode, args, context, info) => {
      return (await episode.populate('characters').execPopulate()).characters
    }
  }
}
