//https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035

import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import mocks from './mock'

const typeDefs = `
type Query {
  testString: String
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
