import { Box } from "@mui/material";
import ResponseContainer from "@/components/response-container";
import { Reply } from "../../types/index";

const Reply = ({ reply }: Reply) => {
  return (
    <Box
      sx={{
        width: "90%",
      }}
    >
      <ResponseContainer response={reply} />
    </Box>
  );
};

export default Reply;
