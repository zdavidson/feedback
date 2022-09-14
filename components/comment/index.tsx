import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Reply from "@/components/reply";
import ResponseContainer from "@/components/response-container";

const Comment = ({ comment }: any) => {
  return (
    <>
      <ResponseContainer response={comment} />
      {comment.replies.length ? (
        comment.replies.map((reply: any, key: number) => {
          return (
            <Box key={key} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Reply reply={reply} />
            </Box>
          );
        })
      ) : (
        <Divider />
      )}
    </>
  );
};

export default Comment;
