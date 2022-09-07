import {
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  FilledInput,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Box from "../../components/shared/Box";
import Button from "../../components/shared/Button";
import TextField from "../../components/shared/TextField";
import { COLORS } from "../../styles/theme/themeOptions";
import AddIcon from "@mui/icons-material/Add";
import DecorativeCircle from "../../components/shared/DecorativeCircle";

const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const AddNewSuggestion = () => {
  const router = useRouter();

  return (
    <Grid
      sx={{
        mt: 2,
      }}
      justifyContent="center"
      container
      spacing={2}
    >
      <Grid item md={5}>
        <Box sx={{ mb: 8 }}>
          <Typography
            sx={{ color: COLORS.primary.navy, fontWeight: 700 }}
            variant="body2"
          >
            <Link href="/">{`< Go Back`}</Link>
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{ backgroundColor: COLORS.primary.white, px: 6, py: 5 }}
        >
          <DecorativeCircle>
            <AddIcon fontSize="large" htmlColor={COLORS.primary.white} />
          </DecorativeCircle>
          <Typography variant="h1" sx={{ my: 4 }}>
            Create New Feedback
          </Typography>
          <Typography variant="h4">Feedback Title</Typography>
          <Typography variant="body2">
            Add a short, descriptive headline
          </Typography>
          <TextField id="feedback-title" />
          <Typography variant="h4">Category</Typography>
          <Typography variant="body2">
            Choose a category for your feedback
          </Typography>
          <Select
            input={<FilledInput disableUnderline fullWidth />}
            sx={{
              backgroundColor: COLORS.background,
              borderRadius: 2,
              my: 2,
            }}
          >
            {tags.map((tag, key) => (
              <MenuItem key={key}>{tag}</MenuItem>
            ))}
          </Select>
          <Typography variant="h4">Feedback Detail</Typography>
          <Typography variant="body2">
            Include any specific comments on what should be improved, added,
            etc.{" "}
          </Typography>
          <TextField id="feedback-detail" height={100} />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              backgroundColor={COLORS.primary.navy}
              onClick={() => router.push("/")}
            >
              Cancel
            </Button>
            <Button onClick={() => console.log("Add Feedback")} sx={{ ml: 2 }}>
              Add Feedback
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddNewSuggestion;
