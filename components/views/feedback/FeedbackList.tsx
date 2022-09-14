import { Box } from "@mui/material";
import SuggestionCard from "./suggestions/SuggestionCard";
import { useGetSuggestions } from "lib/supabase/feedbackList";

const FeedbackList = () => {
  const { data, isLoading } = useGetSuggestions();

  if (isLoading) return <p>Loading...</p>;
  return (
    <Box>
      {data?.map((suggestion: any, key: number) => {
        if (suggestion.statusID === null) {
          return <SuggestionCard key={key} suggestion={suggestion} />;
        } else return "";
      })}
    </Box>
  );
};

export default FeedbackList;
