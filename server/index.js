const { ApolloServer } = require("apollo-server");
const logger = require("@vampiire/node-logger")();

const { models } = require("../db");
const typeDefs = require("./type-defs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: (options) => {
    const { req } = options;

    return {
      req,
      logger,
      models,
    };
  },
});

server
  .listen(process.env.PORT)
  .then(serverInfo => logger.info(`server up on ${serverInfo.url}`))
  .catch(logger.error);
