import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { gql, useQuery } from "@apollo/client";

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

const SuggestionsSortQuery = gql`
  query {
    suggestions {
      id
    }
  }
`;

const SuggestionsSort = () => {
  const { data, error, loading } = useQuery(SuggestionsSortQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

  return (
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
  );
};

export default SuggestionsSort;
