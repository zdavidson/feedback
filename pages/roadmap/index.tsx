import Header from "@/components/header";
import RoadmapHeader from "@/components/roadmap-header";
import RoadmapList from "@/components/roadmap-list";
import { Grid } from "@mui/material";

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
