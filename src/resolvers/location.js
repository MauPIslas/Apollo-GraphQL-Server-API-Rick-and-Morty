import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Location } from '../models'

export default {
  Query: {
    locations: (root, args, context, info) => {
      return Location.find({})
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
