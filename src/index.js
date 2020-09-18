// Import graphql server
import { GraphQLServer } from 'graphql-yoga';

// Schema type defs
const typeDefs = `
    type Query {
        hello: String!
    }
`;

//Type resolvers
const resolvers = {
    Query : {
        hello() {
            return 'trial query!';
        }
    }
}

// Creating server definition
const server = new GraphQLServer({
    typeDefs,
    resolvers
})

// Start the server
server.start( ({port}) => {
    console.log('Graphql server is now running on ${port}');
})

//console.log("Inside index.js");