import Box from "../../../../shared/Box";
import { gql, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
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

interface Props {
  suggestionID?: any;
}

const Comments = ({ suggestionID }: Props) => {
  const { data, error, loading } = useQuery(CommentsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

  if (data.comments[0].suggestionID == suggestionID)
    return (
      <Box>
        <Typography variant="h3">{data.comments.length} Comments</Typography>
        {data.comments.map((comment: any, key: number) => {
          return <Comment comment={comment} key={key} />;
        })}
      </Box>
    );
  else return null;
};

export default Comments;
