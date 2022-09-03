import { Box } from "@mui/material";
import FeedbackCard from "./FeedbackCard";
import type { Feedback } from "../../../../pages/api/data";

interface FeedbackListProps {
  list: [];
}

const FeedbackList = ({ list }: FeedbackListProps) => {
  return (
    <Box>
      {list?.map((feedback: Feedback) => {
        return (
          <FeedbackCard
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
