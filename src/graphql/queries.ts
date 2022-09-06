/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      comment
      replies {
        items {
          id
          content
          commentID
          createdAt
          updatedAt
        }
        nextToken
      }
      suggestionID
      user {
        id
        comments {
          nextToken
        }
        name
        userName
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        replies {
          nextToken
        }
        suggestionID
        user {
          id
          name
          userName
          createdAt
          updatedAt
        }
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReply = /* GraphQL */ `
  query GetReply($id: ID!) {
    getReply(id: $id) {
      id
      content
      comment {
        id
        comment
        replies {
          nextToken
        }
        suggestionID
        user {
          id
          name
          userName
          createdAt
          updatedAt
        }
        userID
        createdAt
        updatedAt
      }
      commentID
      createdAt
      updatedAt
    }
  }
`;
export const listReplies = /* GraphQL */ `
  query ListReplies(
    $filter: ModelReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        comment {
          id
          comment
          suggestionID
          userID
          createdAt
          updatedAt
        }
        commentID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSuggestion = /* GraphQL */ `
  query GetSuggestion($id: ID!) {
    getSuggestion(id: $id) {
      id
      comments {
        items {
          id
          comment
          suggestionID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      tags {
        items {
          id
          suggestionID
          tagID
          createdAt
          updatedAt
        }
        nextToken
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
        comments {
          nextToken
        }
        description
        statusID
        status {
          id
          name
          createdAt
          updatedAt
        }
        tags {
          nextToken
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
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      suggestions {
        items {
          id
          suggestionID
          tagID
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      comments {
        items {
          id
          comment
          suggestionID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      userName
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comments {
          nextToken
        }
        name
        userName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSuggestionTags = /* GraphQL */ `
  query GetSuggestionTags($id: ID!) {
    getSuggestionTags(id: $id) {
      id
      suggestionID
      tagID
      suggestion {
        id
        comments {
          nextToken
        }
        description
        statusID
        status {
          id
          name
          createdAt
          updatedAt
        }
        tags {
          nextToken
        }
        title
        upvotes
        createdAt
        updatedAt
      }
      tag {
        id
        name
        suggestions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSuggestionTags = /* GraphQL */ `
  query ListSuggestionTags(
    $filter: ModelSuggestionTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestionTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        suggestionID
        tagID
        suggestion {
          id
          description
          statusID
          title
          upvotes
          createdAt
          updatedAt
        }
        tag {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
