/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply($filter: ModelSubscriptionReplyFilterInput) {
    onCreateReply(filter: $filter) {
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
export const onUpdateReply = /* GraphQL */ `
  subscription OnUpdateReply($filter: ModelSubscriptionReplyFilterInput) {
    onUpdateReply(filter: $filter) {
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
export const onDeleteReply = /* GraphQL */ `
  subscription OnDeleteReply($filter: ModelSubscriptionReplyFilterInput) {
    onDeleteReply(filter: $filter) {
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
export const onCreateSuggestion = /* GraphQL */ `
  subscription OnCreateSuggestion(
    $filter: ModelSubscriptionSuggestionFilterInput
  ) {
    onCreateSuggestion(filter: $filter) {
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
export const onUpdateSuggestion = /* GraphQL */ `
  subscription OnUpdateSuggestion(
    $filter: ModelSubscriptionSuggestionFilterInput
  ) {
    onUpdateSuggestion(filter: $filter) {
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
export const onDeleteSuggestion = /* GraphQL */ `
  subscription OnDeleteSuggestion(
    $filter: ModelSubscriptionSuggestionFilterInput
  ) {
    onDeleteSuggestion(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateSuggestionTags = /* GraphQL */ `
  subscription OnCreateSuggestionTags(
    $filter: ModelSubscriptionSuggestionTagsFilterInput
  ) {
    onCreateSuggestionTags(filter: $filter) {
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
export const onUpdateSuggestionTags = /* GraphQL */ `
  subscription OnUpdateSuggestionTags(
    $filter: ModelSubscriptionSuggestionTagsFilterInput
  ) {
    onUpdateSuggestionTags(filter: $filter) {
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
export const onDeleteSuggestionTags = /* GraphQL */ `
  subscription OnDeleteSuggestionTags(
    $filter: ModelSubscriptionSuggestionTagsFilterInput
  ) {
    onDeleteSuggestionTags(filter: $filter) {
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
