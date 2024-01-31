// server/routes/graphql.mjs
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const router = express.Router();

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

router.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL for testing in development
  })
);

export default router;
