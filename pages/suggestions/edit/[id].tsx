import { useGetSuggestion } from "lib/supabase/feedbackList";
import { useRouter } from "next/router";

import UpsertFeedbackContainer from "@/components/upsert-feedback-container";

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
