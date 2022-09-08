import { COLORS } from "@/styles/theme/themeOptions";
import StyledBox from "@/components/shared/Box";

import { gql, useQuery } from "@apollo/client";
import ButtonBox from "@/components/shared/ButtonBox";
import { Typography } from "@mui/material";

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
        p: 2,
        my: 3,
      }}
    >
      {data.tags?.map((name: string, key: number) => (
        <ButtonBox
          className={name === "All" ? "clicked" : ""}
          key={key}
          sx={{
            backgroundColor: COLORS.secondary.grey.s60,
            borderRadius: 2,
            color: COLORS.primary.blue,
            m: 0.75,
            px: 2,
            py: 0.8,
          }}
        >
          <Typography sx={{ fontWeight: 700 }} variant="body2">
            {name}
          </Typography>
        </ButtonBox>
      ))}
    </StyledBox>
  );
};

export default Tags;
