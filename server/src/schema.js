const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    commits: [Commit!]!
  }

  type Commit {
    id: ID!
    title: String!
    date: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
  }
`;

module.exports = typeDefs;
