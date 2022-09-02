import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/StyledBox";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import { Box, Typography } from "@mui/material";
import Button from "../../../shared/StyledButton";

const Header = () => {
  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.primary.navy,
        color: COLORS.primary.white,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <EmojiObjectsOutlinedIcon />
        <Typography sx={{ ml: 1 }} variant="h3">
          3 Suggestions
        </Typography>
      </Box>
      <Button>+ Add Feedback</Button>
    </StyledBox>
  );
};

export default Header;
