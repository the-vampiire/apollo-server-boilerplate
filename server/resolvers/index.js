const typeResolvers = require("./types");
const queryResolvers = require("./queries");
const mutationResolvers = require("./mutations");

module.exports = {
  ...typeResolvers,
  ...queryResolvers,
  ...mutationResolvers,
};
