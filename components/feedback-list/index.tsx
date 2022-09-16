/* eslint-disable no-constant-condition */
import { Box } from "@mui/material";
import { useAtom } from "jotai";
import { useGetSuggestions } from "lib/supabase/feedbackList";
import { Suggestion } from "types";

import { globalTag } from "../sidebar-tags";
import SuggestionCard from "../suggestion-card";

const FeedbackList = () => {
  const { data, isLoading } = useGetSuggestions();

  const [currentTag] = useAtom(globalTag);

  if (isLoading) return <p>Loading...</p>;

  // All
  if (currentTag == "All" || currentTag == "1")
    return (
      <Box>
        {data?.map((suggestion: Suggestion) => {
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
        {data?.map((suggestion: Suggestion) => {
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
