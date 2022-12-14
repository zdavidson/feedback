import { SxProps, Theme, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "utils/supabaseClient";

import ButtonBox from "@/components/button-box";
import { COLORS } from "@/styles/theme/themeOptions";

interface Props {
  suggestionID: number;
  sx?: SxProps<Theme> | undefined;
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
