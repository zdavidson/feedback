/* eslint-disable no-constant-condition */
import { Box } from "@mui/material";
import SuggestionCard from "../suggestion-card";
import { useGetSuggestions } from "lib/supabase/feedbackList";
import { useAtom } from "jotai";
import { globalTag } from "../sidebar-tags";

const FeedbackList = () => {
  const { data, isLoading } = useGetSuggestions();

  const [currentTag] = useAtom(globalTag);

  if (isLoading) return <p>Loading...</p>;

  // All
  if (currentTag == "All" || currentTag == "1")
    return (
      <Box>
        {data?.map((suggestion: any) => {
          if (suggestion.statusID === null) {
            return (
              <SuggestionCard key={suggestion.id} suggestion={suggestion} />
            );
          } else return "";
        })}
      </Box>
    );

  // Feature
  if (currentTag !== "All" || "1") {
    return (
      <Box>
        {data?.map((suggestion: any) => {
          if (suggestion.statusID === null && suggestion.tagID == currentTag) {
            return (
              <SuggestionCard key={suggestion.id} suggestion={suggestion} />
            );
          } else return "";
        })}
      </Box>
    );
  } else return <div></div>;
};

export default FeedbackList;
