import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/StyledBox";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import Button from "../../../shared/StyledButton";
import { useRouter } from "next/router";

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

import { gql, useQuery } from "@apollo/client";

const HeaderQuery = gql`
  query {
    suggestions {
      id
    }
  }
`;

const Header = () => {
  const router = useRouter();

  const { data, error, loading } = useQuery(HeaderQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

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
          {data?.suggestions.length || 0} Suggestions
        </Typography>

        <Select
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          sx={{ ml: 4, width: 200 }}
        >
          <MenuItem>Most Upvotes</MenuItem>
          <MenuItem>Least Upvotes</MenuItem>
          <MenuItem>Most Comments</MenuItem>
          <MenuItem>Least Comments</MenuItem>
        </Select>
      </Box>
      <Button onClick={() => router.push("/suggestions/add")}>
        + Add Feedback
      </Button>
    </StyledBox>
  );
};

export default Header;
