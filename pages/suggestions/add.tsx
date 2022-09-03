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
import StyledBox from "../../components/shared/StyledBox";
import StyledButton from "../../components/shared/StyledButton";
import StyledTextField from "../../components/shared/StyledTextField";
import { COLORS } from "../../styles/theme/themeOptions";

const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const AddNewFeedback = () => {
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
        <Box>
          <Link href="/">{`< Go Back`}</Link>
        </Box>
        <StyledBox
          component="form"
          sx={{ backgroundColor: COLORS.primary.white, px: 6, py: 5 }}
        >
          <Typography variant="h1" sx={{ my: 4 }}>
            Create New Feedback
          </Typography>
          <Typography variant="h4">Feedback Title</Typography>
          <Typography variant="body2">
            Add a short, descriptive headline
          </Typography>
          <StyledTextField id="feedback-title" />
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
            {tags.map((tag) => (
              <MenuItem>{tag}</MenuItem>
            ))}
          </Select>
          <Typography variant="h4">Feedback Detail</Typography>
          <Typography variant="body2">
            Include any specific comments on what should be improved, added,
            etc.{" "}
          </Typography>
          <StyledTextField id="feedback-detail" height={100} />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <StyledButton
              backgroundColor={COLORS.primary.navy}
              onClick={() => router.push("/")}
            >
              Cancel
            </StyledButton>
            <StyledButton
              onClick={() => console.log("Add Feedback")}
              sx={{ ml: 2 }}
            >
              Add Feedback
            </StyledButton>
          </Box>
        </StyledBox>
      </Grid>
    </Grid>
  );
};

export default AddNewFeedback;
