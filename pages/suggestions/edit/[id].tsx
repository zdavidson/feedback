import { useGetSuggestion } from "lib/supabase/feedbackList";
import { useRouter } from "next/router";

import UpdateFeedbackForm from "@/components/update-feedback-form";

const EditFeedback = () => {
  const router = useRouter();

  const { id } = router.query;
  const { data, isLoading } = useGetSuggestion(id);

  if (isLoading) return <p>Loading...</p>;

  return <UpdateFeedbackForm title={`Edit '${data?.[0].title}'`} />;
};

export default EditFeedback;
