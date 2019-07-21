import mongoose, { Schema } from 'mongoose'

const episodeSchema = new mongoose.Schema({
  name: String,
  air_date: String,
  episode: String,
  characters: [{
    type: Schema.Types.ObjectId,
    ref: 'Character'
  }],
  created: String
}, {
  timestamps: true
})

const Episode = mongoose.model('Episode', episodeSchema)

export default Episode
