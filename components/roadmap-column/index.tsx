import { Box, SxProps, Theme, Typography } from "@mui/material";
import { RoadmapData, Suggestion } from "types";

import RoadmapCard from "../roadmap-card";

interface Props {
  data: RoadmapData;
  description: string;
  sx?: SxProps<Theme> | undefined;
  title: string;
}

const RoadmapColumn = ({ data, description, sx, title }: Props) => {
  return (
    <Box sx={{ ...sx }}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
      {data?.map((suggestion: Suggestion) => {
        if (suggestion?.statuses?.name === title) {
          return <RoadmapCard key={suggestion.id} suggestion={suggestion} />;
        }
        return null;
      })}
    </Box>
  );
};

export default RoadmapColumn;
