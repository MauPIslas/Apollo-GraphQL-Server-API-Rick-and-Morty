import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import express from 'express'
import mongoose from 'mongoose'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { APP_PORT, DB_HOST } from './config'

(async () => {
  try {
    await mongoose.connect(DB_HOST, { useNewUrlParser: true })
    const app = express()
    app.disable('x-powerede-by')

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      validationRules: [depthLimit(3)]
    })

    server.applyMiddleware({ app }) // app is from an existing express app
    app.listen({ port: APP_PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`)
    )
  } catch (e) {
    console.error(e)
  }
})()
