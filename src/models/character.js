import mongoose from 'mongoose'

const characterSchema = new mongoose.Schema({
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: String,
  location: String,
  image: String,
  episode: [String],
  created: String
}, {
  timestamps: true
})

const Character = mongoose.model('Character', characterSchema)

export default Character
