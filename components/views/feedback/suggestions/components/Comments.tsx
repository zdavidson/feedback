import Box from "@/components/shared/Box";
import { Typography } from "@mui/material";
import Comment from "./Comment";

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
