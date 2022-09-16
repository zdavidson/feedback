import { Grid } from "@mui/material";

import Header from "@/components/header";
import RoadmapHeader from "@/components/roadmap-header";
import RoadmapList from "@/components/roadmap-list";

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
        <Header>
          <RoadmapHeader />
        </Header>
        <RoadmapList />
      </Grid>
    </Grid>
  );
};

export default Roadmap;
