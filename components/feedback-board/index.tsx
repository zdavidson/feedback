import { Box, Grid } from "@mui/material";

import FeedbackList from "@/components/feedback-list";
import Header from "@/components/header";
import SideBar from "@/components/sidebar";
import SuggestionsSort from "@/components/suggestions-sort";

const FeedbackBoard = () => {
  return (
    <Grid
      sx={{
        mt: 2,
      }}
      justifyContent="center"
      container
      spacing={2}
    >
      <Grid item md={2.5}>
        <SideBar />
      </Grid>
      <Grid item md={8}>
        <Box>
          <Header>{/* <SuggestionsSort /> */}</Header>
          <FeedbackList />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FeedbackBoard;
