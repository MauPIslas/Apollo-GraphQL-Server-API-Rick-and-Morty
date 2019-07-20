import { Episode, Character, Location } from './src/models'
import mongoose from 'mongoose'
import { DB_HOST } from './src/config'
import seedEpisodes from './seeders/episodes.json'
import seedCharacters from './seeders/characters.json'
import seedLocations from './seeders/locations.json'

(async () => {
  try {
    await mongoose.connect(DB_HOST, { useNewUrlParser: true })

    Episode.find({}).deleteMany()
      .then(() => { Episode.create(seedEpisodes) })
      .catch(e => console.log(e))

    Character.find({}).deleteMany()
      .then(() => { Character.create(seedCharacters) })
      .catch(e => console.log(e))

    Location.find({}).deleteMany()
      .then(() => { Location.create(seedLocations) })
      .catch(e => console.log(e))
  } catch (e) {
    console.error(e)
  }
})().catch(e => console.log(e))
