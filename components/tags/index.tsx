import { Typography } from "@mui/material";

import StyledBox from "@/components/box";
import { COLORS } from "@/styles/theme/themeOptions";

interface Props {
  tag: string;
}

const Tags = ({ tag }: Props) => {
  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.background,
        m: 0,
        mt: 2,
        py: 0.75,
        px: 2.25,
        width: "fit-content",
      }}
    >
      <Typography
        sx={{ color: COLORS.primary.blue, fontWeight: 700 }}
        variant="body2"
      >
        {tag}
      </Typography>
    </StyledBox>
  );
};

export default Tags;
