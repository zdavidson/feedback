import { Box } from "@mui/material";
import SuggestionCard from "./suggestions/SuggestionCard";
import { gql, useQuery } from "@apollo/client";
import { Key, useEffect, useState } from "react";
import { listSuggestions } from "src/graphql/queries";
import { API } from "aws-amplify";

const FeedbackListQuery = gql`
  query {
    suggestions {
      id
      title
      description
      tags
    }
  }
`;

async function getSuggestions() {
  const response = await API.graphql({
    query: listSuggestions,
  });
  return { props: { suggestions: response.data } };
}

const FeedbackList = () => {
  const { data, error, loading } = useQuery(FeedbackListQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

  return (
    <Box>
      {data.suggestions.map(
        (suggestion: {
          description: string;
          id: Key | null | undefined;
          title: string;
        }) => {
          return (
            <SuggestionCard
              description={suggestion.description}
              key={suggestion.id}
              title={suggestion.title}
            />
          );
        }
      )}
    </Box>
  );
};

export default FeedbackList;
