import { Box } from "@mui/material";
import { useMemo, useState } from "react";
import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ list }: any) => {
  return (
    <Box>
      {list?.map((feedback: any) => {
        return <FeedbackCard data={feedback} key={feedback.id} />;
      })}
    </Box>
  );
};

export default FeedbackList;
