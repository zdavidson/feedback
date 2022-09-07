import Box from "../../../../shared/Box";
import { gql, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { COLORS } from "../../../../../styles/theme/themeOptions";
import Comment from "./Comment";

const CommentsQuery = gql`
  query {
    comments {
      id
      suggestionID
      comment
      replies {
        id
        commentID
        comment
        user {
          name
          userName
        }
      }
      user {
        name
        userName
      }
    }
  }
`;

const Comments = () => {
  const { data, error, loading } = useQuery(CommentsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;
  console.log(data);

  return (
    <Box sx={{ backgroundColor: COLORS.primary.white }}>
      <Typography variant="h3">{data.comments.length} Comments</Typography>
      {data.comments.map((comment: any, key: number) => {
        return <Comment comment={comment} key={key} />;
      })}
    </Box>
  );
};

export default Comments;
