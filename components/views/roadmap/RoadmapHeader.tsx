import { COLORS } from "@/styles/theme/themeOptions";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const RoadmapHeader = () => {
  return (
    <Box>
      <Typography
        sx={{ color: COLORS.primary.white, fontWeight: 700, mb: 1 }}
        variant="body2"
      >
        <Link href="/">{`< Go Back`}</Link>
      </Typography>
      <Typography variant="h1">Roadmap</Typography>
    </Box>
  );
};

export default RoadmapHeader;
