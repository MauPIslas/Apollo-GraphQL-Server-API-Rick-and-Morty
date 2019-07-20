import mongoose from 'mongoose'

const locationSchema = new mongoose.Schema({
  name: String,
  type: String,
  dimension: String,
  residents: [String],
  created: String
}, {
  timestamps: true
})

const Location = mongoose.model('Location', locationSchema)

export default Location
