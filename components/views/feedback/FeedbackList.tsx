import { Box } from "@mui/material";
import SuggestionCard from "./suggestions/SuggestionCard";
import { gql, useQuery } from "@apollo/client";
import { useState, useMemo } from "react";
import { supabase } from "utils/supabaseClient";

const FeedbackListQuery = gql`
  query {
    suggestions {
      id
      comments
      description
      status
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
  status: string;
  tags: [string];
  upvotes: number;
  comments: number;
}

const FeedbackList = () => {
  const [suggestions, setSuggestions] = useState<any>("");

  useMemo(() => {
    fetchSuggestions();
  }, []);

  async function fetchSuggestions() {
    const { data } = await supabase
      .from("suggestions")
      .select(`*, comments (content)`);

    setSuggestions(data);
  }
  console.log(suggestions);

  const { data, error, loading } = useQuery(FeedbackListQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

  return (
    <Box>
      {data?.suggestions.map((suggestion: Suggestion, key: number) => {
        if (!suggestion.status) {
          return <SuggestionCard key={key} suggestion={suggestion} />;
        } else return "";
      })}
    </Box>
  );
};

export default FeedbackList;
