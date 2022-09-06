/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentInput = {
  id?: string | null,
  comment?: string | null,
  suggestionID: string,
  userID: string,
};

export type ModelCommentConditionInput = {
  comment?: ModelStringInput | null,
  suggestionID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  comment?: string | null,
  replies?: ModelReplyConnection | null,
  suggestionID: string,
  user?: User | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelReplyConnection = {
  __typename: "ModelReplyConnection",
  items:  Array<Reply | null >,
  nextToken?: string | null,
};

export type Reply = {
  __typename: "Reply",
  id: string,
  content?: string | null,
  comment?: Comment | null,
  commentID: string,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  comments?: ModelCommentConnection | null,
  name?: string | null,
  userName?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  comment?: string | null,
  suggestionID?: string | null,
  userID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateReplyInput = {
  id?: string | null,
  content?: string | null,
  commentID: string,
};

export type ModelReplyConditionInput = {
  content?: ModelStringInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelReplyConditionInput | null > | null,
  or?: Array< ModelReplyConditionInput | null > | null,
  not?: ModelReplyConditionInput | null,
};

export type UpdateReplyInput = {
  id: string,
  content?: string | null,
  commentID?: string | null,
};

export type DeleteReplyInput = {
  id: string,
};

export type CreateSuggestionInput = {
  id?: string | null,
  description?: string | null,
  statusID?: string | null,
  title?: string | null,
  upvotes?: number | null,
};

export type ModelSuggestionConditionInput = {
  description?: ModelStringInput | null,
  statusID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  upvotes?: ModelIntInput | null,
  and?: Array< ModelSuggestionConditionInput | null > | null,
  or?: Array< ModelSuggestionConditionInput | null > | null,
  not?: ModelSuggestionConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Suggestion = {
  __typename: "Suggestion",
  id: string,
  comments?: ModelCommentConnection | null,
  description?: string | null,
  statusID?: string | null,
  status?: Status | null,
  tags?: ModelSuggestionTagsConnection | null,
  title?: string | null,
  upvotes?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type Status = {
  __typename: "Status",
  id: string,
  name?: string | null,
  suggestions?: ModelSuggestionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSuggestionConnection = {
  __typename: "ModelSuggestionConnection",
  items:  Array<Suggestion | null >,
  nextToken?: string | null,
};

export type ModelSuggestionTagsConnection = {
  __typename: "ModelSuggestionTagsConnection",
  items:  Array<SuggestionTags | null >,
  nextToken?: string | null,
};

export type SuggestionTags = {
  __typename: "SuggestionTags",
  id: string,
  suggestionID: string,
  tagID: string,
  suggestion: Suggestion,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name?: string | null,
  suggestions?: ModelSuggestionTagsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSuggestionInput = {
  id: string,
  description?: string | null,
  statusID?: string | null,
  title?: string | null,
  upvotes?: number | null,
};

export type DeleteSuggestionInput = {
  id: string,
};

export type CreateStatusInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelStatusConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStatusConditionInput | null > | null,
  or?: Array< ModelStatusConditionInput | null > | null,
  not?: ModelStatusConditionInput | null,
};

export type UpdateStatusInput = {
  id: string,
  name?: string | null,
};

export type DeleteStatusInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  userName?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  userName?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSuggestionTagsInput = {
  id?: string | null,
  suggestionID: string,
  tagID: string,
};

export type ModelSuggestionTagsConditionInput = {
  suggestionID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelSuggestionTagsConditionInput | null > | null,
  or?: Array< ModelSuggestionTagsConditionInput | null > | null,
  not?: ModelSuggestionTagsConditionInput | null,
};

export type UpdateSuggestionTagsInput = {
  id: string,
  suggestionID?: string | null,
  tagID?: string | null,
};

export type DeleteSuggestionTagsInput = {
  id: string,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  suggestionID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelReplyFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelReplyFilterInput | null > | null,
  or?: Array< ModelReplyFilterInput | null > | null,
  not?: ModelReplyFilterInput | null,
};

export type ModelSuggestionFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  statusID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  upvotes?: ModelIntInput | null,
  and?: Array< ModelSuggestionFilterInput | null > | null,
  or?: Array< ModelSuggestionFilterInput | null > | null,
  not?: ModelSuggestionFilterInput | null,
};

export type ModelStatusFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStatusFilterInput | null > | null,
  or?: Array< ModelStatusFilterInput | null > | null,
  not?: ModelStatusFilterInput | null,
};

export type ModelStatusConnection = {
  __typename: "ModelStatusConnection",
  items:  Array<Status | null >,
  nextToken?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSuggestionTagsFilterInput = {
  id?: ModelIDInput | null,
  suggestionID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelSuggestionTagsFilterInput | null > | null,
  or?: Array< ModelSuggestionTagsFilterInput | null > | null,
  not?: ModelSuggestionTagsFilterInput | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  comment?: ModelSubscriptionStringInput | null,
  suggestionID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionReplyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  commentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionReplyFilterInput | null > | null,
  or?: Array< ModelSubscriptionReplyFilterInput | null > | null,
};

export type ModelSubscriptionSuggestionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  statusID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  upvotes?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionSuggestionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSuggestionFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStatusFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStatusFilterInput | null > | null,
  or?: Array< ModelSubscriptionStatusFilterInput | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  userName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionSuggestionTagsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  suggestionID?: ModelSubscriptionIDInput | null,
  tagID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSuggestionTagsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSuggestionTagsFilterInput | null > | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    comment?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        content?: string | null,
        commentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    suggestionID: string,
    user?:  {
      __typename: "User",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    comment?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        content?: string | null,
        commentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    suggestionID: string,
    user?:  {
      __typename: "User",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    comment?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        content?: string | null,
        commentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    suggestionID: string,
    user?:  {
      __typename: "User",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReplyMutationVariables = {
  input: CreateReplyInput,
  condition?: ModelReplyConditionInput | null,
};

export type CreateReplyMutation = {
  createReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      comment?: string | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      suggestionID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReplyMutationVariables = {
  input: UpdateReplyInput,
  condition?: ModelReplyConditionInput | null,
};

export type UpdateReplyMutation = {
  updateReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      comment?: string | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      suggestionID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReplyMutationVariables = {
  input: DeleteReplyInput,
  condition?: ModelReplyConditionInput | null,
};

export type DeleteReplyMutation = {
  deleteReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      comment?: string | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      suggestionID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSuggestionMutationVariables = {
  input: CreateSuggestionInput,
  condition?: ModelSuggestionConditionInput | null,
};

export type CreateSuggestionMutation = {
  createSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    statusID?: string | null,
    status?:  {
      __typename: "Status",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    upvotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSuggestionMutationVariables = {
  input: UpdateSuggestionInput,
  condition?: ModelSuggestionConditionInput | null,
};

export type UpdateSuggestionMutation = {
  updateSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    statusID?: string | null,
    status?:  {
      __typename: "Status",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    upvotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSuggestionMutationVariables = {
  input: DeleteSuggestionInput,
  condition?: ModelSuggestionConditionInput | null,
};

export type DeleteSuggestionMutation = {
  deleteSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    statusID?: string | null,
    status?:  {
      __typename: "Status",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    upvotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStatusMutationVariables = {
  input: CreateStatusInput,
  condition?: ModelStatusConditionInput | null,
};

export type CreateStatusMutation = {
  createStatus?:  {
    __typename: "Status",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionConnection",
      items:  Array< {
        __typename: "Suggestion",
        id: string,
        description?: string | null,
        statusID?: string | null,
        title?: string | null,
        upvotes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStatusMutationVariables = {
  input: UpdateStatusInput,
  condition?: ModelStatusConditionInput | null,
};

export type UpdateStatusMutation = {
  updateStatus?:  {
    __typename: "Status",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionConnection",
      items:  Array< {
        __typename: "Suggestion",
        id: string,
        description?: string | null,
        statusID?: string | null,
        title?: string | null,
        upvotes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStatusMutationVariables = {
  input: DeleteStatusInput,
  condition?: ModelStatusConditionInput | null,
};

export type DeleteStatusMutation = {
  deleteStatus?:  {
    __typename: "Status",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionConnection",
      items:  Array< {
        __typename: "Suggestion",
        id: string,
        description?: string | null,
        statusID?: string | null,
        title?: string | null,
        upvotes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSuggestionTagsMutationVariables = {
  input: CreateSuggestionTagsInput,
  condition?: ModelSuggestionTagsConditionInput | null,
};

export type CreateSuggestionTagsMutation = {
  createSuggestionTags?:  {
    __typename: "SuggestionTags",
    id: string,
    suggestionID: string,
    tagID: string,
    suggestion:  {
      __typename: "Suggestion",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      statusID?: string | null,
      status?:  {
        __typename: "Status",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      tags?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      upvotes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSuggestionTagsMutationVariables = {
  input: UpdateSuggestionTagsInput,
  condition?: ModelSuggestionTagsConditionInput | null,
};

export type UpdateSuggestionTagsMutation = {
  updateSuggestionTags?:  {
    __typename: "SuggestionTags",
    id: string,
    suggestionID: string,
    tagID: string,
    suggestion:  {
      __typename: "Suggestion",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      statusID?: string | null,
      status?:  {
        __typename: "Status",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      tags?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      upvotes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSuggestionTagsMutationVariables = {
  input: DeleteSuggestionTagsInput,
  condition?: ModelSuggestionTagsConditionInput | null,
};

export type DeleteSuggestionTagsMutation = {
  deleteSuggestionTags?:  {
    __typename: "SuggestionTags",
    id: string,
    suggestionID: string,
    tagID: string,
    suggestion:  {
      __typename: "Suggestion",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      statusID?: string | null,
      status?:  {
        __typename: "Status",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      tags?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      upvotes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    comment?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        content?: string | null,
        commentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    suggestionID: string,
    user?:  {
      __typename: "User",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      comment?: string | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      suggestionID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReplyQueryVariables = {
  id: string,
};

export type GetReplyQuery = {
  getReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      comment?: string | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      suggestionID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRepliesQueryVariables = {
  filter?: ModelReplyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRepliesQuery = {
  listReplies?:  {
    __typename: "ModelReplyConnection",
    items:  Array< {
      __typename: "Reply",
      id: string,
      content?: string | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      commentID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSuggestionQueryVariables = {
  id: string,
};

export type GetSuggestionQuery = {
  getSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    statusID?: string | null,
    status?:  {
      __typename: "Status",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    upvotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSuggestionsQueryVariables = {
  filter?: ModelSuggestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSuggestionsQuery = {
  listSuggestions?:  {
    __typename: "ModelSuggestionConnection",
    items:  Array< {
      __typename: "Suggestion",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      statusID?: string | null,
      status?:  {
        __typename: "Status",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      tags?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      upvotes?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStatusQueryVariables = {
  id: string,
};

export type GetStatusQuery = {
  getStatus?:  {
    __typename: "Status",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionConnection",
      items:  Array< {
        __typename: "Suggestion",
        id: string,
        description?: string | null,
        statusID?: string | null,
        title?: string | null,
        upvotes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStatusesQueryVariables = {
  filter?: ModelStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStatusesQuery = {
  listStatuses?:  {
    __typename: "ModelStatusConnection",
    items:  Array< {
      __typename: "Status",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSuggestionTagsQueryVariables = {
  id: string,
};

export type GetSuggestionTagsQuery = {
  getSuggestionTags?:  {
    __typename: "SuggestionTags",
    id: string,
    suggestionID: string,
    tagID: string,
    suggestion:  {
      __typename: "Suggestion",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      statusID?: string | null,
      status?:  {
        __typename: "Status",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      tags?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      upvotes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSuggestionTagsQueryVariables = {
  filter?: ModelSuggestionTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSuggestionTagsQuery = {
  listSuggestionTags?:  {
    __typename: "ModelSuggestionTagsConnection",
    items:  Array< {
      __typename: "SuggestionTags",
      id: string,
      suggestionID: string,
      tagID: string,
      suggestion:  {
        __typename: "Suggestion",
        id: string,
        description?: string | null,
        statusID?: string | null,
        title?: string | null,
        upvotes?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    comment?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        content?: string | null,
        commentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    suggestionID: string,
    user?:  {
      __typename: "User",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    comment?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        content?: string | null,
        commentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    suggestionID: string,
    user?:  {
      __typename: "User",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    comment?: string | null,
    replies?:  {
      __typename: "ModelReplyConnection",
      items:  Array< {
        __typename: "Reply",
        id: string,
        content?: string | null,
        commentID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    suggestionID: string,
    user?:  {
      __typename: "User",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReplySubscriptionVariables = {
  filter?: ModelSubscriptionReplyFilterInput | null,
};

export type OnCreateReplySubscription = {
  onCreateReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      comment?: string | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      suggestionID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReplySubscriptionVariables = {
  filter?: ModelSubscriptionReplyFilterInput | null,
};

export type OnUpdateReplySubscription = {
  onUpdateReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      comment?: string | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      suggestionID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReplySubscriptionVariables = {
  filter?: ModelSubscriptionReplyFilterInput | null,
};

export type OnDeleteReplySubscription = {
  onDeleteReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      comment?: string | null,
      replies?:  {
        __typename: "ModelReplyConnection",
        nextToken?: string | null,
      } | null,
      suggestionID: string,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSuggestionSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionFilterInput | null,
};

export type OnCreateSuggestionSubscription = {
  onCreateSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    statusID?: string | null,
    status?:  {
      __typename: "Status",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    upvotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSuggestionSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionFilterInput | null,
};

export type OnUpdateSuggestionSubscription = {
  onUpdateSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    statusID?: string | null,
    status?:  {
      __typename: "Status",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    upvotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSuggestionSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionFilterInput | null,
};

export type OnDeleteSuggestionSubscription = {
  onDeleteSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    description?: string | null,
    statusID?: string | null,
    status?:  {
      __typename: "Status",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    upvotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStatusSubscriptionVariables = {
  filter?: ModelSubscriptionStatusFilterInput | null,
};

export type OnCreateStatusSubscription = {
  onCreateStatus?:  {
    __typename: "Status",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionConnection",
      items:  Array< {
        __typename: "Suggestion",
        id: string,
        description?: string | null,
        statusID?: string | null,
        title?: string | null,
        upvotes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStatusSubscriptionVariables = {
  filter?: ModelSubscriptionStatusFilterInput | null,
};

export type OnUpdateStatusSubscription = {
  onUpdateStatus?:  {
    __typename: "Status",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionConnection",
      items:  Array< {
        __typename: "Suggestion",
        id: string,
        description?: string | null,
        statusID?: string | null,
        title?: string | null,
        upvotes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStatusSubscriptionVariables = {
  filter?: ModelSubscriptionStatusFilterInput | null,
};

export type OnDeleteStatusSubscription = {
  onDeleteStatus?:  {
    __typename: "Status",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionConnection",
      items:  Array< {
        __typename: "Suggestion",
        id: string,
        description?: string | null,
        statusID?: string | null,
        title?: string | null,
        upvotes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    suggestions?:  {
      __typename: "ModelSuggestionTagsConnection",
      items:  Array< {
        __typename: "SuggestionTags",
        id: string,
        suggestionID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        comment?: string | null,
        suggestionID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSuggestionTagsSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionTagsFilterInput | null,
};

export type OnCreateSuggestionTagsSubscription = {
  onCreateSuggestionTags?:  {
    __typename: "SuggestionTags",
    id: string,
    suggestionID: string,
    tagID: string,
    suggestion:  {
      __typename: "Suggestion",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      statusID?: string | null,
      status?:  {
        __typename: "Status",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      tags?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      upvotes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSuggestionTagsSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionTagsFilterInput | null,
};

export type OnUpdateSuggestionTagsSubscription = {
  onUpdateSuggestionTags?:  {
    __typename: "SuggestionTags",
    id: string,
    suggestionID: string,
    tagID: string,
    suggestion:  {
      __typename: "Suggestion",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      statusID?: string | null,
      status?:  {
        __typename: "Status",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      tags?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      upvotes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSuggestionTagsSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionTagsFilterInput | null,
};

export type OnDeleteSuggestionTagsSubscription = {
  onDeleteSuggestionTags?:  {
    __typename: "SuggestionTags",
    id: string,
    suggestionID: string,
    tagID: string,
    suggestion:  {
      __typename: "Suggestion",
      id: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      description?: string | null,
      statusID?: string | null,
      status?:  {
        __typename: "Status",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      tags?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      upvotes?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      suggestions?:  {
        __typename: "ModelSuggestionTagsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
