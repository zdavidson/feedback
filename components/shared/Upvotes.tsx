import { COLORS } from "@/styles/theme/themeOptions";
import { Typography } from "@mui/material";
import { useState } from "react";
import ButtonBox from "@/components/shared/ButtonBox";
import { supabase } from "utils/supabaseClient";

interface Props {
  suggestionID: number;
  sx?: any;
  upvotes: number;
}

const Upvotes = ({ suggestionID, sx, upvotes }: Props) => {
  const [clicked, setClicked] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(upvotes);

  const handleClick = async (e: any, id: number, upvotes: number) => {
    const { data, error } = await supabase
      .from("suggestions")
      .update({ upvotes })
      .eq("id", id)
      .select();

    if (error) {
      console.log("Error: ", error);
    }

    if (data) {
      console.log("Data: ", data);
      setUpvoteCount(upvoteCount + 1);
      setClicked(!clicked);
    }
  };

  // const handleUpvote = () => {
  //   clicked ? setUpvoteCount(upvoteCount - 1) : setUpvoteCount(upvoteCount + 1);
  // };

  return (
    <ButtonBox
      className={clicked ? "clicked" : ""}
      onClick={(e) => handleClick(e, suggestionID, upvotes + 1)}
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
