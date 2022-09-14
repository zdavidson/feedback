import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Reply from "@/components/reply";
import ResponseContainer from "@/components/response-container";
import { CommentType } from "../../types/index";

const Comment = ({ comment }: CommentType) => {
  return (
    <>
      <ResponseContainer response={comment} />
      {comment.replies?.length ? (
        comment.replies.map((reply: any) => {
          return (
            <Box
              key={reply.id}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
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
