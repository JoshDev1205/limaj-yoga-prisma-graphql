import { GraphQLServer } from 'graphql-yoga'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { prisma } from './generated/prisma-client'

const context = {
  prisma
}

const Server = new GraphQLServer({
  typeDefs,
  resolvers,
  context
})

const opts = {
  port: 4000
}

Server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`)
})