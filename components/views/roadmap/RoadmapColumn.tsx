import { Box, Typography } from "@mui/material";
import RoadmapCard from "./RoadmapCard";

const RoadmapColumn = () => {
  return (
    <Box>
      <Typography variant="h3">Planned</Typography>
      <Typography variant="body1">Ideas prioritized for research</Typography>
      <RoadmapCard />
    </Box>
  );
};

export default RoadmapColumn;
