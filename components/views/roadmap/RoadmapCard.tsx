import { Box, Typography } from "@mui/material";
import StyledBox from "@/components/shared/Box";

interface Props {
  suggestion: any;
}

const RoadmapCard = ({ suggestion }: Props) => {
  return (
    <StyledBox sx={{ mt: 3, mx: 0 }}>
      <Typography variant="body1">{suggestion.status}</Typography>
      <Typography variant="h3">{suggestion.title}</Typography>
      <Typography variant="body1">{suggestion.description}</Typography>
    </StyledBox>
  );
};

export default RoadmapCard;
