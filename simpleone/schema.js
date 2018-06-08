import { makeExecutableSchema } from 'graphql-tools';

// schema.js
const typeDefs = `
  type Query {
    author(id: Int!): Author
    book(id: Int!): Book
  }

  type Author {
    id: Int!
    firstName: String
    lastName: String
    books: [Book]
  }

  type Book {
    title: String
    author: Author
  }

  schema {
    query: Query
  }
`;

export  const schema = makeExecutableSchema({
  typeDefs
});

export default schema;
