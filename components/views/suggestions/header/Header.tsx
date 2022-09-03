import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/StyledBox";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import {
  Box,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import Button from "../../../shared/StyledButton";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type HeaderProps = {
  suggestions: number;
};

const Header = ({ suggestions }: HeaderProps) => {
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
          {suggestions} Suggestions
        </Typography>

        <Select
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          sx={{ ml: 4, width: 200 }}
        ></Select>
      </Box>
      <Button>+ Add Feedback</Button>
    </StyledBox>
  );
};

export default Header;
