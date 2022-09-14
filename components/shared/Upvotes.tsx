import { COLORS } from "@/styles/theme/themeOptions";
import { Typography } from "@mui/material";
import { useState } from "react";
import ButtonBox from "@/components/shared/ButtonBox";
import { supabase } from "utils/supabaseClient";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  suggestionID: number;
  sx?: any;
  upvotes: number;
}

const Upvotes = ({ suggestionID, sx, upvotes }: Props) => {
  const [clicked, setClicked] = useState(false);
  const queryClient = useQueryClient();

  const handleClick = async (id: number, upvotes: number) => {
    const { data, error } = await supabase
      .from("suggestions")
      .update({ upvotes })
      .eq("id", id)
      .select();

    if (error) {
      console.log("Error: ", error);
    }

    if (data) {
      queryClient.refetchQueries({ queryKey: ["suggestions-list"] });
      setClicked(!clicked);
    }
  };

  return (
    <ButtonBox
      className={clicked ? "clicked" : ""}
      onClick={() => {
        clicked
          ? handleClick(suggestionID, upvotes - 1)
          : handleClick(suggestionID, upvotes + 1);
      }}
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
        {upvotes}
      </Typography>
    </ButtonBox>
  );
};

export default Upvotes;
