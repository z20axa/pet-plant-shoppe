const { gql } = require('graphql-tag');


//Update information for plants
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    plant: [Plant]
  }

  type Plant {
    _id: ID
    name: String
    plantAuthor: String
    description: String
    price: Float,
    animalSafe: String,
    careLevel: String,
    growthHabit: String,
    soilRequirement: String,
    light: String,
    air: String,
    comments: [Comment]!
    inStore: String!
  }

  type Comment {
    _id: ID
    comment_text: String
    comment_author: String
    createdAt: String
  }
# Don't delete or change the token, as it is needed for authentication protocol
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    plants(username: String): [Plant]
    plant(plantId: ID!): Plant
    me: User
    inStore (inStore: String!):[Plant]
    specificPlantA(name:String, animalSafe: String!):[Plant]
    specificPlantS(name:String!):[Plant]
   
    
  }
  
  type Mutation {
    seed: String
    addUser(username: String!, email: String!, password: String!): Auth
    # this login matches the token in the resolvers.js
    login(email: String!, password: String!): Auth
    addFavorite(plantId: ID!): User
    removeFavorite(plantId: ID!): User
    addComment(plantId: ID!, comment_text: String!): Plant
    removeComment(plantId: ID!, commentId: ID!): Plant
    
    #purchase plant needs to be created 
   
 
  }


`;

module.exports = typeDefs;
