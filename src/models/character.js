import mongoose, { Schema } from 'mongoose'

const characterSchema = new mongoose.Schema({
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },
  image: String,
  episode: [{
    type: Schema.Types.ObjectId,
    ref: 'Episode'
  }],
  created: String
}, {
  timestamps: true
})

const Character = mongoose.model('Character', characterSchema)

export default Character
