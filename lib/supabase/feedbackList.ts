import { useQuery } from "@tanstack/react-query";
import { supabase } from "utils/supabaseClient";

// Suggestions List
async function getSuggestions() {
  let { error, data } = await supabase
    .from("suggestions")
    .select(`*, comments (content), tags (name)`);

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
