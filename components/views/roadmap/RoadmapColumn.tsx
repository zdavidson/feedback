import { Box, Typography } from "@mui/material";
import RoadmapCard from "./RoadmapCard";

interface Props {
  data: any;
  description: string;
  sx?: any;
  title: string;
}

const RoadmapColumn = ({ data, description, sx, title }: Props) => {
  return (
    <Box sx={{ ...sx }}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
      {data?.map((suggestion: any) => {
        if (suggestion?.statuses?.name === title) {
          return <RoadmapCard suggestion={suggestion} />;
        }
        return null;
      })}
    </Box>
  );
};

export default RoadmapColumn;
