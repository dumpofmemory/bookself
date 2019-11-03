const { Prisma } = require('prisma-binding');
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('backend/src/schema.graphql');
const Query = require('./src/Query');
const Mutation = require('./src/Mutation');

const db = new Prisma({
  typeDefs: 'backend/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
});

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
    Query
  },
  context: ({ req }) => ({
    ...req,
    db
  })
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
