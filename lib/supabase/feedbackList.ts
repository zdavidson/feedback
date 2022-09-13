import { useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "utils/supabaseClient";

// Suggestions List
async function getSuggestions() {
  let { error, data } = await supabase
    .from("suggestions")
    .select(`*, comments (content), tags (name)`)
    .order("id");

  if (error) {
    throw new Error();
  }
  return data;
}

export const useGetSuggestions = () => {
  return useQuery(["suggestions-list"], () => getSuggestions());
};

// Single Suggestion
async function getSuggestion(id: string | string[] | undefined) {
  let { error, data } = await supabase
    .from("suggestions")
    .select(`*, comments (content), tags (name)`)
    .eq("id", id);

  if (error) {
    throw new Error();
  }
  return data;
}

export const useGetSuggestion = (id: string | string[] | undefined) => {
  return useQuery([`suggestion-${id}`], () => getSuggestion(id));
};

// Upvote
async function addUpvote(suggestionID: number, currentUpvotes: number) {
  let { error, data } = await supabase
    .from("suggestions")
    .update({ upvotes: currentUpvotes })
    .match({ id: suggestionID });

  if (error) {
    throw new Error();
  }
  return data;
}

export const useAddUpvote = (suggestionID: number, currentUpvotes: any) => {
  return useMutation(() => addUpvote(suggestionID, currentUpvotes), {
    onSuccess: async () => {
      console.log("added");
    },
  });
};
