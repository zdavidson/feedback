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

  type Comment {
    user: User
    comment: String
    replies: [Reply]
  }

  type Query {
    suggestions: [Suggestion]
    tags: [String]
  }
`;
