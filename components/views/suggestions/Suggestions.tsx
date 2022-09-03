import { Box, Grid } from "@mui/material";
import FeedbackList from "./feedback/FeedbackList";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

const Suggestions = ({ data }: any) => {
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
        <SideBar data={data} />
      </Grid>
      <Grid item md={8}>
        <Box>
          <Header suggestions={data?.feedbackList?.length} />
          <FeedbackList list={data.feedbackList} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Suggestions;
