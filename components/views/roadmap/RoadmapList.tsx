import { Box, Grid } from "@mui/material";
import RoadmapColumn from "./RoadmapColumn";

const RoadmapList = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      md={11.5}
      spacing={4}
      sx={{ mx: 0 }}
    >
      <Grid item md={4}>
        <RoadmapColumn />
      </Grid>
      <Grid item md={4}>
        <RoadmapColumn />
      </Grid>
      <Grid item md={4}>
        <RoadmapColumn />
      </Grid>
    </Grid>
  );
};

export default RoadmapList;
