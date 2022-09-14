import { Box } from "@mui/material";
import SuggestionCard from "../suggestion-card";
import { useGetSuggestions } from "lib/supabase/feedbackList";

const FeedbackList = () => {
  const { data, isLoading } = useGetSuggestions();

  if (isLoading) return <p>Loading...</p>;
  return (
    <Box>
      {data?.map((suggestion: any) => {
        if (suggestion.statusID === null) {
          return <SuggestionCard key={suggestion.id} suggestion={suggestion} />;
        } else return "";
      })}
    </Box>
  );
};

export default FeedbackList;
