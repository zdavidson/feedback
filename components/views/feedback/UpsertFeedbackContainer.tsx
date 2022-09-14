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
import StyledBox from "@/components/shared/Box";
import StyledButton from "@/components/shared/Button";
import StyledTextField from "@/components/shared/TextField";
import { COLORS } from "@/styles/theme/themeOptions";
import AddIcon from "@mui/icons-material/Add";
import BrushIcon from "@mui/icons-material/Brush";
import DecorativeCircle from "@/components/shared/DecorativeCircle";
import { useGetStatuses, useGetTags } from "lib/supabase/feedbackList";

interface Props {
  role: string;
  title: string;
}

const UpsertFeedbackContainer = ({ role, title }: Props) => {
  const { data: tags } = useGetTags();
  const { data: statuses } = useGetStatuses();

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

        <StyledBox
          component="form"
          sx={{ backgroundColor: COLORS.primary.white, px: 6, py: 5 }}
        >
          <DecorativeCircle>
            {role === "edit" ? (
              <BrushIcon fontSize="large" htmlColor={COLORS.primary.white} />
            ) : (
              <AddIcon fontSize="large" htmlColor={COLORS.primary.white} />
            )}
          </DecorativeCircle>
          <Typography variant="h1" sx={{ my: 4 }}>
            {title}
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
            {tags?.map((tag, key) => (
              <MenuItem key={key}>{tag.name}</MenuItem>
            ))}
          </Select>

          {role === "edit" ? (
            <>
              <Typography variant="h4">Update Status</Typography>
              <Typography variant="body2">Change feedback state</Typography>
              <Select
                input={<FilledInput disableUnderline fullWidth />}
                sx={{
                  backgroundColor: COLORS.background,
                  borderRadius: 2,
                  my: 2,
                }}
              >
                {statuses?.map((status, key) => (
                  <MenuItem key={key}>{status.name}</MenuItem>
                ))}
              </Select>
            </>
          ) : null}

          <Typography variant="h4">Feedback Detail</Typography>
          <Typography variant="body2">
            Include any specific comments on what should be improved, added,
            etc.{" "}
          </Typography>
          <StyledTextField id="feedback-detail" height={100} />

          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            {role === "edit" ? (
              <StyledButton
                backgroundColor="red"
                onClick={() => router.push("/")}
                sx={{ height: "fit-content", m: 0 }}
              >
                Delete
              </StyledButton>
            ) : null}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
          </Box>
        </StyledBox>
      </Grid>
    </Grid>
  );
};

export default UpsertFeedbackContainer;
