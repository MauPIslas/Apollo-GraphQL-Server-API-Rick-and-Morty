import mongoose, { Schema } from 'mongoose'

const locationSchema = new mongoose.Schema({
  name: String,
  type: String,
  dimension: String,
  residents: [{
    type: Schema.Types.ObjectId,
    ref: 'Character'
  }],
  created: String
}, {
  timestamps: true
})

const Location = mongoose.model('Location', locationSchema)

export default Location
