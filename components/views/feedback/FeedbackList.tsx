import { Box } from "@mui/material";
import SuggestionCard from "./suggestions/SuggestionCard";
import { gql, useQuery } from "@apollo/client";
import { Key } from "react";

const SuggestionsQuery = gql`
  query {
    suggestions {
      id
      title
      description
      tags
    }
  }
`;

const FeedbackList = () => {
  const { data, error, loading } = useQuery(SuggestionsQuery);

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
