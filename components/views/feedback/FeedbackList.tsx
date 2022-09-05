import { Box } from "@mui/material";
import SuggestionCard from "./suggestions/SuggestionCard";
import { gql, useQuery } from "@apollo/client";

const FeedbackListQuery = gql`
  query {
    suggestions {
      id
      title
      description
      tags
      upvotes
      comments
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
      {data?.suggestions.map((suggestion: Suggestion) => {
        return (
          <SuggestionCard
            comments={suggestion.comments}
            description={suggestion.description}
            key={suggestion.id}
            tags={suggestion.tags}
            title={suggestion.title}
            upvotes={suggestion.upvotes}
          />
        );
      })}
    </Box>
  );
};

export default FeedbackList;
