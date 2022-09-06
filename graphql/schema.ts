import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Suggestion {
    id: ID!
    title: String
    description: String
    tags: [String]
    upvotes: Int
    comments: Int
  }

  type Tags {
    names: [String]
  }

  type Comment {
    id: ID!
    user: User!
    comment: String!
    replies: [Reply]
  }

  type Reply {
    user: User
    comment: String
  }

  type User {
    name: String
    userName: String
  }

  type Status {
    description: String
    status: String
  }

  type Query {
    comments: [Comment]
    suggestions: [Suggestion]
    tags: [String]
  }
`;
