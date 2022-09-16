import { Typography } from "@mui/material";

import Box from "@/components/box";

import { Comments } from "../../types";
import Comment from "../comment";

const Comments = ({ comments }: Comments) => {
  if (comments.length)
    return (
      <Box>
        <Typography variant="h3">{comments.length} Comments</Typography>
        {comments.map((comment: any) => {
          return <Comment comment={comment} key={comment.id} />;
        })}
      </Box>
    );
  else return null;
};

export default Comments;
