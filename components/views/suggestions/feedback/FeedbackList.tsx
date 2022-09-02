import { Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import type { Data } from "../../../../pages/api/data";

const FeedbackList = () => {
  const [data, setData] = useState<any>([]);

  const getData = async () =>
    fetch("/api/data")
      .then((res) => res.json())
      .then((res) => setData(res));

  useMemo(() => {
    getData();
  }, []);

  return (
    <Box>
      {data?.feedbackList?.map((feedback: any) => {
        return <FeedbackCard data={feedback} key={feedback.id} />;
      })}
    </Box>
  );
};

export default FeedbackList;
