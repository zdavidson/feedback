/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createReply = /* GraphQL */ `
  mutation CreateReply(
    $input: CreateReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    createReply(input: $input, condition: $condition) {
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
export const updateReply = /* GraphQL */ `
  mutation UpdateReply(
    $input: UpdateReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    updateReply(input: $input, condition: $condition) {
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
export const deleteReply = /* GraphQL */ `
  mutation DeleteReply(
    $input: DeleteReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    deleteReply(input: $input, condition: $condition) {
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
export const createSuggestion = /* GraphQL */ `
  mutation CreateSuggestion(
    $input: CreateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    createSuggestion(input: $input, condition: $condition) {
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
export const updateSuggestion = /* GraphQL */ `
  mutation UpdateSuggestion(
    $input: UpdateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    updateSuggestion(input: $input, condition: $condition) {
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
export const deleteSuggestion = /* GraphQL */ `
  mutation DeleteSuggestion(
    $input: DeleteSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    deleteSuggestion(input: $input, condition: $condition) {
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
export const createStatus = /* GraphQL */ `
  mutation CreateStatus(
    $input: CreateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    createStatus(input: $input, condition: $condition) {
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
export const updateStatus = /* GraphQL */ `
  mutation UpdateStatus(
    $input: UpdateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    updateStatus(input: $input, condition: $condition) {
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
export const deleteStatus = /* GraphQL */ `
  mutation DeleteStatus(
    $input: DeleteStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    deleteStatus(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSuggestionTags = /* GraphQL */ `
  mutation CreateSuggestionTags(
    $input: CreateSuggestionTagsInput!
    $condition: ModelSuggestionTagsConditionInput
  ) {
    createSuggestionTags(input: $input, condition: $condition) {
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
export const updateSuggestionTags = /* GraphQL */ `
  mutation UpdateSuggestionTags(
    $input: UpdateSuggestionTagsInput!
    $condition: ModelSuggestionTagsConditionInput
  ) {
    updateSuggestionTags(input: $input, condition: $condition) {
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
export const deleteSuggestionTags = /* GraphQL */ `
  mutation DeleteSuggestionTags(
    $input: DeleteSuggestionTagsInput!
    $condition: ModelSuggestionTagsConditionInput
  ) {
    deleteSuggestionTags(input: $input, condition: $condition) {
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
