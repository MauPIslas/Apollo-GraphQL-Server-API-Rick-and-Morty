import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Location } from '../models'

export default {
  Query: {
    locations: async (root, { page }, context, info) => {
      const count = await Location.countDocuments()
      let pages = parseInt(count / 20) + 1
      if ((count % 20) === 0) {
        pages = count / 20
      }
      let prev = page - 1
      let documents = Location.find({}).limit(20).skip((page - 1) * 20)
      if (page === 1) {
        prev = null
        documents = Location.find({}).limit(20)
      }
      let next = page + 1
      if (page >= pages) {
        next = null
      }
      const location = {
        info: {
          prev: prev,
          next: next,
          count: count,
          pages: pages

        },
        results: documents
      }
      return location
    },
    location: (root, { id }, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid episode ID.`)
      }
      return Location.findById(id)
    }
  },
  Mutation: {
    createLocation: async (root, args, context, info) => {
      return Location.create(args)
    }
  },
  Location: {
    residents: async (location, args, context, info) => {
      return (await location.populate('residents').execPopulate()).residents
    }
  }
}
