import { Box } from "@mui/material";
import SuggestionCard from "./suggestions/SuggestionCard";
import { gql, useQuery } from "@apollo/client";

const FeedbackListQuery = gql`
  query {
    suggestions {
      id
      comments
      description
      tags
      title
      upvotes
    }
  }
`;

interface Suggestion {
  id: number;
  title: string;
  description: string;
  tags: [string];
  upvotes: number;
  comments: number;
}

const FeedbackList = () => {
  const { data, error, loading } = useQuery(FeedbackListQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

  return (
    <Box>
      {data?.suggestions.map((suggestion: Suggestion, key: number) => {
        return <SuggestionCard key={key} suggestion={suggestion} />;
      })}
    </Box>
  );
};

export default FeedbackList;
