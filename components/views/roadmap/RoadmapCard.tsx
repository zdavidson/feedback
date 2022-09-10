import { Box, Typography } from "@mui/material";
import StyledBox from "@/components/shared/Box";

const RoadmapCard = () => {
  return (
    <StyledBox sx={{ mt: 3, mx: 0 }}>
      <Typography variant="body1">Planned</Typography>
      <Typography variant="h3">More comprehensive reports</Typography>
      <Typography variant="body1">
        It would be great to see a more detailed breakdown of solutions.
      </Typography>
    </StyledBox>
  );
};

export default RoadmapCard;
