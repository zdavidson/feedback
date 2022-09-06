/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSuggestionInput = {
  id?: string | null,
  description?: string | null,
  statusID: string,
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
  description?: string | null,
  statusID: string,
  status?: Status | null,
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

export type ModelSubscriptionSuggestionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  statusID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  upvotes?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionSuggestionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSuggestionFilterInput | null > | null,
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

export type CreateSuggestionMutationVariables = {
  input: CreateSuggestionInput,
  condition?: ModelSuggestionConditionInput | null,
};

export type CreateSuggestionMutation = {
  createSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    description?: string | null,
    statusID: string,
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
    description?: string | null,
    statusID: string,
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
    description?: string | null,
    statusID: string,
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
        statusID: string,
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
        statusID: string,
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
        statusID: string,
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

export type GetSuggestionQueryVariables = {
  id: string,
};

export type GetSuggestionQuery = {
  getSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    description?: string | null,
    statusID: string,
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
      description?: string | null,
      statusID: string,
      status?:  {
        __typename: "Status",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
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
        statusID: string,
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

export type OnCreateSuggestionSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionFilterInput | null,
};

export type OnCreateSuggestionSubscription = {
  onCreateSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    description?: string | null,
    statusID: string,
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
    description?: string | null,
    statusID: string,
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
    description?: string | null,
    statusID: string,
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
        statusID: string,
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
        statusID: string,
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
        statusID: string,
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
