import { Box, Typography } from "@mui/material";
import { COLORS } from "@/styles/theme/themeOptions";
import StyledBox from "@/components/shared/Box";

const SiteTitle = () => {
  return (
    <StyledBox
      sx={{ backgroundColor: "lightblue", color: COLORS.primary.white }}
    >
      <Box sx={{ mt: 4 }}>
        <Typography variant="h2">Username</Typography>
        <Typography variant="body2">Feedback Board</Typography>
      </Box>
    </StyledBox>
  );
};

export default SiteTitle;
