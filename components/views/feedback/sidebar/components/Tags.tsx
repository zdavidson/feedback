import { COLORS } from "@/styles/theme/themeOptions";
import StyledBox from "@/components/shared/Box";

import { gql, useQuery } from "@apollo/client";
import ButtonBox from "@/components/shared/ButtonBox";
import { useState } from "react";

const TagsQuery = gql`
  query {
    tags
  }
`;

const Tags = () => {
  const { data, error, loading } = useQuery(TagsQuery);
  const [clicked, setClicked] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

  const handleSelection = () => {
    setClicked(!clicked);
  };

  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.primary.white,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data.tags?.map((name: string, key: number) => (
        <ButtonBox
          className={clicked ? "clicked" : ""}
          key={key}
          onClick={handleSelection}
          sx={{
            backgroundColor: COLORS.secondary.grey.s60,
            borderRadius: 2,
            m: 0.75,
            px: 2,
            py: 1,
          }}
        >
          {name}
        </ButtonBox>
      ))}
    </StyledBox>
  );
};

export default Tags;
