import { Episode, Character, Location } from './src/models'
import mongoose from 'mongoose'
import { DB_HOST } from './src/config'
import seedEpisodes from './seeders/episodes.json'
import seedCharacters from './seeders/characters.json'
import seedLocations from './seeders/locations.json'

(async () => {
  try {
    await mongoose.connect(DB_HOST, { useNewUrlParser: true })

    Episode.deleteMany()
      .then(() => { Episode.insertMany(seedEpisodes) })
      .catch(e => console.log(e))

    Character.deleteMany()
      .then(() => { Character.insertMany(seedCharacters) })
      .catch(e => console.log(e))

    Location.deleteMany()
      .then(() => { Location.insertMany(seedLocations) })
      .catch(e => console.log(e))

    setTimeout(function () {
      console.log('Closing connection with the database')
      mongoose.connection.close()
    }, 3000)
  } catch (e) {
    console.error(e)
  }
})().then(() => { console.log('done') }).catch(e => console.log(e))
