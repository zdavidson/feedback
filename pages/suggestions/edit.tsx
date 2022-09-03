import { Grid, Box } from "@mui/material";
import StyledButton from "../../components/shared/StyledButton";
import { COLORS } from "../../styles/theme/themeOptions";

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
            <StyledButton
              backgroundColor={COLORS.primary.blue}
              onClick={() => console.log("clicked")}
            >
              Edit Feedback
            </StyledButton>
          </Box>
          <Box>Feedback</Box>
          <Box>Comments</Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditFeedback;
