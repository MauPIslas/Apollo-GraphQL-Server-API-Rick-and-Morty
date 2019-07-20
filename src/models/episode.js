import mongoose from 'mongoose'
var json = require('../seeders/episodes.json')

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

Episode.find({}).deleteMany().then(() => {
  Episode.create(json)
})
export default Episode
