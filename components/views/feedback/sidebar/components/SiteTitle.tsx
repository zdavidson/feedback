import { Box, Typography } from "@mui/material";
import { COLORS } from "@/styles/theme/themeOptions";
import StyledBox from "@/components/shared/Box";

interface Props {
  user?: string;
}

const SiteTitle = ({ user }: Props) => {
  return (
    <StyledBox
      sx={{
        backgroundImage: "linear-gradient(125deg, #28A7ED, #A337F6, #E84D70)",
        color: COLORS.primary.white,
      }}
    >
      <Box sx={{ mt: 4 }}>
        <Typography variant="h2">{user ? user : "Username"}</Typography>
        <Typography variant="body2">Feedback Board</Typography>
      </Box>
    </StyledBox>
  );
};

export default SiteTitle;
