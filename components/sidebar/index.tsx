import { Box } from "@mui/material";

import SidebarRoadmap from "../sidebar-roadmap";
import SiteTitle from "../sidebar-site-title";
import SidebarTags from "../sidebar-tags";

const SideBar = () => {
  return (
    <Box>
      <SiteTitle />
      <SidebarTags />
      <SidebarRoadmap />
    </Box>
  );
};

export default SideBar;
