import { Box } from "@mui/material";
import FeedbackList from "./feedback/FeedbackList";
import Header from "./header/Header";

const Main = () => {
  return (
    <Box>
      <Header />
      <FeedbackList />
    </Box>
  );
};

export default Main;
