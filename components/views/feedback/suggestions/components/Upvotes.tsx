import { COLORS } from "../../../../../styles/theme/themeOptions";
import { Box, styled, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  upvotes: number;
}

const StyledBox = styled(Box)({
  alignItems: "center",
  backgroundColor: COLORS.background,
  borderRadius: 6,
  color: "black",
  display: "flex",
  flexDirection: "column",
  height: 55,
  justifyContent: "center",
  py: 1,
  px: 1.25,
  width: 40,

  "&:hover": {
    backgroundColor: "#CFD7FF",
    cursor: "pointer",
  },

  "&.clicked": {
    backgroundColor: COLORS.primary.blue,
    color: COLORS.primary.white,
  },
});

const Upvotes = ({ upvotes }: Props) => {
  const [clicked, setClicked] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(upvotes);

  const handleUpvote = () => {
    clicked ? setUpvoteCount(upvoteCount - 1) : setUpvoteCount(upvoteCount + 1);
    setClicked(!clicked);
  };

  return (
    <StyledBox className={clicked ? "clicked" : ""} onClick={handleUpvote}>
      <span
        style={{
          color: clicked ? COLORS.primary.white : COLORS.primary.blue,
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        ^
      </span>
      <Typography
        sx={{
          fontWeight: 700,
        }}
        variant="body2"
      >
        {upvoteCount}
      </Typography>
    </StyledBox>
  );
};

export default Upvotes;
