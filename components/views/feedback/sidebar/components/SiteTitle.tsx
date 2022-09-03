import { Box, Typography } from "@mui/material";
import { COLORS } from "../../../../../styles/theme/themeOptions";
import StyledBox from "../../../../shared/StyledBox";

interface TitleProps {
  title: string;
}

const SiteTitle = ({ title }: TitleProps) => {
  return (
    <StyledBox
      sx={{ backgroundColor: "lightblue", color: COLORS.primary.white }}
    >
      <Box sx={{ mt: 4 }}>
        <Typography variant="h2">Username</Typography>
        <Typography variant="body2">{title}</Typography>
      </Box>
    </StyledBox>
  );
};

export default SiteTitle;