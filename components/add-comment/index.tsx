import TextField from "@/components/text-field";
import { Box, Typography } from "@mui/material";
import StyledBox from "@/components/box";
import Button from "@/components/button";

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
