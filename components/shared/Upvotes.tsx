import { COLORS } from "@/styles/theme/themeOptions";
import { Typography } from "@mui/material";
import { useState } from "react";
import ButtonBox from "@/components/shared/ButtonBox";

interface Props {
  sx?: any;
  upvotes: number;
}

const Upvotes = ({ sx, upvotes }: Props) => {
  const [clicked, setClicked] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(upvotes);

  const handleUpvote = () => {
    clicked ? setUpvoteCount(upvoteCount - 1) : setUpvoteCount(upvoteCount + 1);
    setClicked(!clicked);
  };

  return (
    <ButtonBox
      className={clicked ? "clicked" : ""}
      onClick={handleUpvote}
      sx={{
        height: 55,
        justifyContent: "center",
        width: 40,
        ...sx,
      }}
    >
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
    </ButtonBox>
  );
};

export default Upvotes;
