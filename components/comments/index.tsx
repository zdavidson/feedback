import Box from "@/components/box";
import { Typography } from "@mui/material";
import Comment from "../comment";

interface Props {
  comments: [any];
}

const Comments = ({ comments }: Props) => {
  if (comments.length)
    return (
      <Box>
        <Typography variant="h3">{comments.length} Comments</Typography>
        {comments.map((comment: any, key: number) => {
          return <Comment comment={comment} key={key} />;
        })}
      </Box>
    );
  else return null;
};

export default Comments;
