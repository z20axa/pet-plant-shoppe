const { gql } = require('graphql-tag');



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
    imageUrl: String!
    inStore: Boolean!
  }

  type StripeKey {
    key: String
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

  type Order {
    _id: ID
    purchaseDate: String
    plants: [Plant]
  }

  type Checkout {
    session: ID
  }

  type Query {
    users: [User]
    user(username: String!): User
    plants(username: String): [Plant]
    plant(plantId: ID!): Plant
    me: User
    inStore:[Plant]
    specificPlantA(name:String, animalSafe: String!):[Plant]
    specificPlantS(name:String):[Plant]
    order(_id: ID!): Order
    checkout(plants: [ID]!): Checkout
    getStripeKey: StripeKey
  }
  
  type Mutation {
    seed: String
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(_id: ID): Auth
    # this login matches the token in the resolvers.js
    login(email: String!, password: String!): Auth
    addFavorite(plantId: ID!): User
    removeFavorite(plantId: ID!): User
    addComment(plantId: ID!, comment_text: String!): Plant
    removeComment(plantId: ID!, commentId: ID!): Plant
    addOrder(plants: [ID]!): Order
    
   
   
 
  }


`;

module.exports = typeDefs;
