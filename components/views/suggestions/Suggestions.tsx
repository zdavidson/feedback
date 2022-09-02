import { Box, Container } from "@mui/material";
import FeedbackList from "./feedback/FeedbackList";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

const Suggestions = () => {
  return (
    <Container
      sx={{
        display: "flex",
        mt: 2,
      }}
    >
      <SideBar />
      <Box>
        <Header />
        <FeedbackList />
      </Box>
    </Container>
  );
};

export default Suggestions;
