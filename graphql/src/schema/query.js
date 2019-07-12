const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');
const User = require('./user');

exports.Type = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: User.Type,
      resolve: (parent, args, { user }) => ({ name: user })
    }
  })
});
