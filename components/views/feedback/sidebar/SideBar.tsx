import { Box } from "@mui/material";
import Roadmap from "./components/RoadmapSidebar";
import SiteTitle from "./components/SiteTitle";
import Tags from "./components/Tags";

const SideBar = ({ data }: any) => {
  return (
    <Box>
      <SiteTitle title={data.siteName} />
      <Tags tags={data.tags} />
      <Roadmap />
    </Box>
  );
};

export default SideBar;
