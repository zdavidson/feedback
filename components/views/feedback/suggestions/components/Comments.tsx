import { gql, useQuery } from "@apollo/client";

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

  return <div>Comments</div>;
};

export default Comments;
