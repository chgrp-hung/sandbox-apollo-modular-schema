// schema.js
import Author from './author';
import Book from './book';

import { mergeSchemas, makeExecutableSchema } from 'graphql-tools';


const RootQuery = `
  type RootQuery {
    _root: String
    allAuthors: [Author]
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

//
// console.log("book");
// console.log(Book());

// Below concat the arrays from functions and destructured as param, got "Error: Type "Author" was defined more than once."
/*
let typeDefs = Author()
typeDefs.concat(Book());

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, ...typeDefs],
  resolvers: {},
});
*/

const rootSchema = makeExecutableSchema({
  typeDefs: [RootQuery, SchemaDefinition, Author],
  resolverValidationOptions: {requireResolversForResolveType: false}
});

const authorSchema = makeExecutableSchema({
  typeDefs: [Author],
  resolvers: {},
});

const bookSchema = makeExecutableSchema({
  typeDefs: [Book],
  resolver: {}
});

export default mergeSchemas({
  schemas: [ rootSchema, authorSchema, bookSchema],
  resolver: [],
});
