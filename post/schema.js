// schema.js
import Post from './post';

import { makeExecutableSchema } from 'graphql-tools'

const RootQuery = `
  type RootQuery {
    post(id: Int!): Post
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const typeDefs = [...Post, "type Any {name: String}"]

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition, RootQuery,
    // we have to destructure array imported from the post.js file
    // as typeDefs only accepts an array of strings or functions
    // ...Post
    ...typeDefs

  ],
  // we could also concatenate arrays
  // typeDefs: [SchemaDefinition, RootQuery].concat(Post)
  resolvers: {},
});
