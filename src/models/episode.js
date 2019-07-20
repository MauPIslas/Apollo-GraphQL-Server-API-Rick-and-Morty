import mongoose from 'mongoose'


const episodeSchema = new mongoose.Schema({
  name: String,
  air_date: String,
  episode: String,
  characters: [String],
  created: String
}, {
  timestamps: true
})

const Episode = mongoose.model('Episode', episodeSchema)

export default Episode
