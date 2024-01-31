// server/server.mjs
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const app = express();
const PORT = process.env.PORT || 3000;

// GraphQL schema
const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    addUser(username: String!, password: String!): User
  }
`);

// In-memory database (replace with your MongoDB setup)
const users = [];

// Root resolver
const root = {
  getUser: ({ id }) => users.find((user) => user.id === id),
  addUser: ({ username, password }) => {
    const user = { id: String(users.length + 1), username, password };
    users.push(user);
    return user;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL for testing in development
  })
);

app.listen(PORT, () => {
  console.log(`GraphQL Server is running on port ${PORT}`);
});
