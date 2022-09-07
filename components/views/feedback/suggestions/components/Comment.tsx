import { Box, Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Reply from "./Reply";
import ResponseContainer from "./ResponseContainer";

const Comment = ({ comment }: any) => {
  return (
    <>
      <ResponseContainer response={comment} />
      {comment.replies.length ? (
        comment.replies.map((reply: any) => {
          return (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
