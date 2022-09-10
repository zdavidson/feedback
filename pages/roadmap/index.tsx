import Header from "@/components/shared/header/Header";
import RoadmapHeader from "@/components/views/roadmap/RoadmapHeader";
import RoadmapList from "@/components/views/roadmap/RoadmapList";
import { Box, Grid } from "@mui/material";

const Roadmap = () => {
  return (
    <Grid
      sx={{
        mt: 2,
      }}
      justifyContent="center"
      container
      spacing={2}
    >
      <Grid item md={9}>
        <Header children={<RoadmapHeader />} />
        <RoadmapList />
      </Grid>
    </Grid>
  );
};

export default Roadmap;
