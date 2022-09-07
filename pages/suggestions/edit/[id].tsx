import UpsertFeedbackContainer from "@/components/views/feedback/UpsertFeedbackContainer";
import { useRouter } from "next/router";

import { gql, useQuery } from "@apollo/client";

const EditFeedbackQuery = gql`
  query {
    suggestions {
      id
      comments
      description
      tags
      title
      upvotes
    }
  }
`;

const EditFeedback = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = useQuery(EditFeedbackQuery);
  const title = data?.suggestions?.map((suggestion: any) => {
    if (suggestion.id == id) return suggestion.title;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong: {error.message}</p>;

  return (
    <UpsertFeedbackContainer role="edit" title={`Edit '${title?.join("")}'`} />
  );
};

export default EditFeedback;
