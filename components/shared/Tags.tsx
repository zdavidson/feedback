import StyledBox from "@/components/shared/Box";
import { COLORS } from "@/styles/theme/themeOptions";
import { Typography } from "@mui/material";

interface Props {
  tags: [string];
}

const Tags = ({ tags }: Props) => {
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
        {tags}
      </Typography>
    </StyledBox>
  );
};

export default Tags;
