import { COLORS } from "@/styles/theme/themeOptions";
import StyledBox from "@/components/box";

import { useGetTags } from "lib/supabase/feedbackList";

import ButtonBox from "@/components/button-box";
import { Typography } from "@mui/material";

const SidebarTags = () => {
  const { data: tags, isLoading } = useGetTags();

  if (isLoading) return <p>Loading...</p>;

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
      {tags?.map((tag: any) => (
        <ButtonBox
          className={tag.name === "All" ? "clicked" : ""}
          key={tag.id}
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
            {tag.name}
          </Typography>
        </ButtonBox>
      ))}
    </StyledBox>
  );
};

export default SidebarTags;
