import { Box } from "@mui/material";
import RoadmapColumn from "@/components/roadmap-column";
import { useGetSuggestions } from "lib/supabase/feedbackList";

const RoadmapList = () => {
  const { data, isLoading } = useGetSuggestions();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Box sx={{ display: "flex", mt: 6, mx: 2 }}>
      <RoadmapColumn
        data={data}
        description="Ideas prioritized for research"
        sx={{ mr: 4 }}
        title="Planned"
      />
      <RoadmapColumn
        data={data}
        description="Currently being developed"
        sx={{ mr: 4 }}
        title="In-Progress"
      />
      <RoadmapColumn data={data} description="Released features" title="Live" />
    </Box>
  );
};

export default RoadmapList;
