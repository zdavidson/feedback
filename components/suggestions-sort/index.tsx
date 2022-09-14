import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useGetSuggestions } from "lib/supabase/feedbackList";
import React, { useMemo } from "react";
import { COLORS } from "@/styles/theme/themeOptions";

const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "white",
    },
    sx: {
      "& .MuiMenuItem-root.Mui-selected": {
        backgroundColor: "white",
        color: COLORS.primary.magenta,
      },
      "& .MuiMenuItem-root:hover": {
        backgroundColor: "transparent",
        color: COLORS.primary.magenta,
      },
      "& .MuiMenuItem-root.Mui-selected:hover": {
        backgroundColor: "white",
        color: COLORS.primary.magenta,
      },
    },
  },
};

const SuggestionsSort = () => {
  const [sort, setSort] = React.useState("");
  const { data, isLoading } = useGetSuggestions();

  let suggestionCount = 0;

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  useMemo(() => {
    data?.forEach((suggestion) => {
      if (suggestion.statusID === null) {
        suggestionCount++;
      }
    });
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <EmojiObjectsOutlinedIcon />
      <Typography sx={{ ml: 1 }} variant="h3">
        {suggestionCount || 0} Suggestions
      </Typography>

      <Box sx={{ minWidth: 120, ml: 4 }}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ color: COLORS.background }}
          >
            Sort By:
          </InputLabel>
          <Select
            labelId="sort-by-select-label"
            id="sort-by-select"
            value={sort}
            label="Sort By"
            onChange={handleChange}
            sx={{ color: COLORS.background }}
            MenuProps={MenuProps}
          >
            <MenuItem value={"Most Upvotes"}>Most Upvotes</MenuItem>
            <MenuItem value={"Least Upvotes"}>Least Upvotes</MenuItem>
            <MenuItem value={"Most Comments"}>Most Comments</MenuItem>
            <MenuItem value={"Leas Comments"}>Least Comments</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SuggestionsSort;
