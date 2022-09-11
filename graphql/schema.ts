import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Suggestion {
    id: ID!
    title: String
    description: String
    status: String
    tags: [String]
    upvotes: Int
    comments: Int
  }

  type Tags {
    names: [String]
  }

  type Comment {
    id: ID!
    suggestionID: ID!
    user: User!
    comment: String!
    replies: [Reply]
  }

  type Reply {
    id: ID!
    commentID: ID!
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
    roadmap: [Suggestion]
    suggestions: [Suggestion]
    tags: [String]
  }
`;
