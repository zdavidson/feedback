import StyledBox from "@/components/shared/Box";
import { COLORS } from "@/styles/theme/themeOptions";
import { Box, styled, Typography } from "@mui/material";
import Link from "next/link";
import CircleIcon from "@mui/icons-material/Circle";

const ListItem = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const RoadmapItem = styled(Box)({
  alignItems: "center",
  display: "flex",
});

const RoadmapCount = styled(Typography)({
  fontWeight: 700,
});

const RoadmapSidebar = () => {
  return (
    <StyledBox>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
        <Typography variant="h3">Roadmap</Typography>
        <Typography
          sx={{
            color: COLORS.primary.blue,
            fontWeight: 700,
            textDecoration: "underline",
          }}
          variant="body2"
        >
          <Link href="/roadmap">View</Link>
        </Typography>
      </Box>
      <Box>
        <ListItem>
          <RoadmapItem>
            <CircleIcon
              sx={{ color: COLORS.tertiary.tangerine, fontSize: 8, mr: 2 }}
            />
            Planned{" "}
          </RoadmapItem>
          <RoadmapCount>2</RoadmapCount>
        </ListItem>
        <ListItem>
          <RoadmapItem>
            <CircleIcon
              sx={{ color: COLORS.primary.magenta, fontSize: 8, mr: 2 }}
            />
            In-Progress{" "}
          </RoadmapItem>
          <RoadmapCount>3</RoadmapCount>
        </ListItem>
        <ListItem>
          <RoadmapItem>
            <CircleIcon
              sx={{ color: COLORS.tertiary.lightBlue, fontSize: 8, mr: 2 }}
            />
            Live{" "}
          </RoadmapItem>
          <RoadmapCount>1</RoadmapCount>
        </ListItem>
      </Box>
    </StyledBox>
  );
};

export default RoadmapSidebar;
