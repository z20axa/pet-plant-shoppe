require("dotenv").config();

const path = require("path");
const express = require("express");
const db = require("./config/connection");
require("./seeders");

const { ApolloServer } = require("@apollo/server");
const { authMiddleware } = require("./utils/auth");

const { expressMiddleware } = require("@apollo/server/express4");
const { typeDefs, resolvers } = require("./schemas");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
};



const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    {
      // hooks into Apollo lifecycle for request and contextValues
      async requestDidStart(context) {
        // goes to authMiddleware
        authMiddleware(context);
      },
    },
  ],
});

const startServer = async () => {
  await server.start();
  app.use("/graphql", cors(), expressMiddleware(server));

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on http://localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startServer();
