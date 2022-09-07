import { Box } from "@mui/material";
import { COLORS } from "../../../../../styles/theme/themeOptions";
import StyledBox from "../../../../shared/Box";

import { gql, useQuery } from "@apollo/client";

const TagsQuery = gql`
  query {
    tags
  }
`;

const Tags = () => {
  const { data, error, loading } = useQuery(TagsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.primary.white,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data.tags?.map((name: string, key: number) => (
        <Box
          key={key}
          sx={{
            backgroundColor: COLORS.secondary.grey.s60,
            borderRadius: 2,
            m: 0.75,
            px: 2,
            py: 1,
          }}
        >
          {name}
        </Box>
      ))}
    </StyledBox>
  );
};

export default Tags;
