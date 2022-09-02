import { Box } from "@mui/material";
import Roadmap from "./components/RoadmapSidebar";
import SiteTitle from "./components/SiteTitle";
import Tags from "./components/Tags";

const SideBar = () => {
  return (
    <Box>
      <SiteTitle />
      <Tags />
      <Roadmap />
    </Box>
  );
};

export default SideBar;
