import { Box, Grid } from "@mui/material";
import FeedbackList from "./FeedbackList";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

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
          <Header />
          <FeedbackList />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FeedbackBoard;
