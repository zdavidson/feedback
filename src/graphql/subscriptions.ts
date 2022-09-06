/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSuggestion = /* GraphQL */ `
  subscription OnCreateSuggestion(
    $filter: ModelSubscriptionSuggestionFilterInput
  ) {
    onCreateSuggestion(filter: $filter) {
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
export const onUpdateSuggestion = /* GraphQL */ `
  subscription OnUpdateSuggestion(
    $filter: ModelSubscriptionSuggestionFilterInput
  ) {
    onUpdateSuggestion(filter: $filter) {
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
export const onDeleteSuggestion = /* GraphQL */ `
  subscription OnDeleteSuggestion(
    $filter: ModelSubscriptionSuggestionFilterInput
  ) {
    onDeleteSuggestion(filter: $filter) {
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
export const onCreateStatus = /* GraphQL */ `
  subscription OnCreateStatus($filter: ModelSubscriptionStatusFilterInput) {
    onCreateStatus(filter: $filter) {
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
export const onUpdateStatus = /* GraphQL */ `
  subscription OnUpdateStatus($filter: ModelSubscriptionStatusFilterInput) {
    onUpdateStatus(filter: $filter) {
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
export const onDeleteStatus = /* GraphQL */ `
  subscription OnDeleteStatus($filter: ModelSubscriptionStatusFilterInput) {
    onDeleteStatus(filter: $filter) {
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
