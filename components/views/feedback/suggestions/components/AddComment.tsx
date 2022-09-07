import TextField from "../../../../../components/shared/TextField";
import { Box, Typography } from "@mui/material";
import StyledBox from "../../../../../components/shared/Box";
import Button from "../../../../../components/shared/Button";

const AddComment = () => {
  return (
    <StyledBox sx={{ mb: 10, p: 5 }}>
      <Typography variant="h3">Add Comment</Typography>
      <TextField height={100} id="add-comment" label="Type your comment here" />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2">250 Characters left</Typography>
        <Button onClick={() => console.log("clicked")}>Post Comment</Button>
      </Box>
    </StyledBox>
  );
};

export default AddComment;
