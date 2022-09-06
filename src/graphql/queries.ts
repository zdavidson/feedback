/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSuggestion = /* GraphQL */ `
  query GetSuggestion($id: ID!) {
    getSuggestion(id: $id) {
      id
      description
      statusID
      status {
        id
        name
        suggestions {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      upvotes
      createdAt
      updatedAt
    }
  }
`;
export const listSuggestions = /* GraphQL */ `
  query ListSuggestions(
    $filter: ModelSuggestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        statusID
        status {
          id
          name
          createdAt
          updatedAt
        }
        title
        upvotes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStatus = /* GraphQL */ `
  query GetStatus($id: ID!) {
    getStatus(id: $id) {
      id
      name
      suggestions {
        items {
          id
          description
          statusID
          title
          upvotes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStatuses = /* GraphQL */ `
  query ListStatuses(
    $filter: ModelStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        suggestions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
