import express from "express";
import bodyParser from "body-parser";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";

const app = express();
const port = 10000;

const apolloServer = new ApolloServer({ typeDefs, resolvers });

app.get("/health", function (req, res) {
  res.send("Server Running");
});

apolloServer.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`app listening on port ${port}`);
  console.log(`Graphql: http://localhost:${port}/graphql`);
  console.log(`Health: http://localhost:${port}/health`);
});
