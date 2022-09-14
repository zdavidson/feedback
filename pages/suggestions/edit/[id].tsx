import UpsertFeedbackContainer from "@/components/upsert-feedback-container";
import { useRouter } from "next/router";

import { useGetSuggestion } from "lib/supabase/feedbackList";

const EditFeedback = () => {
  const router = useRouter();

  const { id } = router.query;
  const { data, isLoading } = useGetSuggestion(id);

  if (isLoading) return <p>Loading...</p>;

  return (
    <UpsertFeedbackContainer role="edit" title={`Edit '${data?.[0].title}'`} />
  );
};

export default EditFeedback;
