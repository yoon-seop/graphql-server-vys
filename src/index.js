import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import Link from "./resolvers/Link";
import Subscription from "./resolvers/Subscription";
import Vote from "./resolvers/Vote";

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote
};

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
