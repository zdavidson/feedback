import { Box } from "@mui/material";
import ResponseContainer from "./ResponseContainer";

interface Props {
  reply: any;
}

const Reply = ({ reply }: Props) => {
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
