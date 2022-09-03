import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Suggestion {
    id: ID!
    title: String
    description: String
    tags: [String]
  }

  type Tags {
    names: [String]
  }

  type Query {
    suggestionList: [Suggestion]
    tags: [Tags]
  }
`;
