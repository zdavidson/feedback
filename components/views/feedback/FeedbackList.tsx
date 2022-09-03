import { Box } from "@mui/material";
import SuggestionCard from "./suggestions/SuggestionCard";
import type { Feedback } from "../../../pages/api/data";

interface FeedbackListProps {
  list: [];
}

const FeedbackList = ({ list }: FeedbackListProps) => {
  return (
    <Box>
      {list?.map((feedback: Feedback) => {
        return (
          <SuggestionCard
            description={feedback.description}
            key={feedback.id}
            title={feedback.title}
          />
        );
      })}
    </Box>
  );
};

export default FeedbackList;
