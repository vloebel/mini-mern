const { gql } = require('apollo-server-express');
//vll:?? How do you assign a proj to a user or do
// other stuff ? Doesn't need a mutation?
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    headshot: String
    bio: String
    friendCount: Int
    projects: [Project]
    friends: [User]
  }

  type Project {
    _id: ID
    title: String
    organizaton: String
    imgLink: Int
    deployedLink: String
    skillList: [String]
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

    createUser(username: String!,
      email: String!,
      password: String!,
      headshot: String,
      bio: String,
      friendCount: Int,
      projects: [Project],
      friends: [User],
      ): Auth

    createProject(title: String!,
      organizaton: String,
      imgLink: Int,
      deployedLink: String,
      skillList: [String]
      ): Project

  }
`;

module.exports = typeDefs;
