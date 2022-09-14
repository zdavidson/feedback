import { useQuery } from "@tanstack/react-query";
import { supabase } from "utils/supabaseClient";

// Suggestions List
async function getSuggestions() {
  let { error, data } = await supabase
    .from("suggestions")
    .select(`*, comments (content), tags (name), statuses (name)`)
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
    .select(
      `*, comments (content, id, users(name, userName), replies(content, id, users(name, userName))), tags (name), statuses (name)`
    )
    .eq("id", id);

  if (error) {
    throw new Error();
  }
  return data;
}

export const useGetSuggestion = (id: string | string[] | undefined) => {
  return useQuery([`suggestion-${id}`], () => getSuggestion(id));
};

// Get All Tags
async function getTags() {
  let { error, data } = await supabase.from("tags").select(`*`).order("id");

  if (error) {
    throw new Error();
  }
  return data;
}

export const useGetTags = () => {
  return useQuery(["tags-list"], () => getTags());
};

// Get All Statuses
async function getStatuses() {
  let { error, data } = await supabase.from("statuses").select(`*`).order("id");

  if (error) {
    throw new Error();
  }
  return data;
}

export const useGetStatuses = () => {
  return useQuery(["statuses-list"], () => getStatuses());
};
