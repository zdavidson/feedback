/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSuggestions = /* GraphQL */ `
  query GetSuggestions {
    getSuggestions {
      id
      comments {
        user {
          name
          userName
        }
        comment
        replies {
          comment
        }
      }
      description
      status {
        description
        status
      }
      tags {
        names
      }
      title
      upvotes
    }
  }
`;
export const getTags = /* GraphQL */ `
  query GetTags {
    getTags {
      names
    }
  }
`;
