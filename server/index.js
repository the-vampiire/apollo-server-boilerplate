const { ApolloServer } = require("apollo-server");

const typeDefs = require("./type-defs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: (options) => {
    const { req } = options;

    return {
      req,
    };
  },
});

server.listen(process.env.PORT || 8008);
