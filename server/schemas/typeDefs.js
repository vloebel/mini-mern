const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    projects: [Project]
    friends: [User]
  }

  type Project {
    _id: ID
    projectText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    projects(username: String): [Project]
    project(_id: ID!): Project
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProject(projectText: String!): Project
    addReaction(projectId: ID!, reactionBody: String!): Project
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
