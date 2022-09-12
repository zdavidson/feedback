import { Box } from "@mui/material";
import RoadmapColumn from "./RoadmapColumn";
import { gql, useQuery } from "@apollo/client";

const RoadmapListQuery = gql`
  query {
    roadmap {
      id
      title
      description
      tags
      upvotes
      comments
      status
    }
  }
`;

const RoadmapList = () => {
  const { data, error, loading } = useQuery(RoadmapListQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

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
