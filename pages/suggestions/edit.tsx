import { Grid, Box } from "@mui/material";
import Button from "@/components/shared/Button";
import { COLORS } from "@/styles/theme/themeOptions";

const EditFeedback = () => {
  return (
    <Grid
      sx={{
        mt: 2,
      }}
      justifyContent="center"
      container
      spacing={2}
    >
      <Grid item md={6}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            Go Back{" "}
            <Button
              backgroundColor={COLORS.primary.blue}
              onClick={() => console.log("clicked")}
            >
              Edit Feedback
            </Button>
          </Box>
          <Box>Feedback</Box>
          <Box>Comments</Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditFeedback;
