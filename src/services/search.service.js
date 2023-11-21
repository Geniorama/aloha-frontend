import { request } from "@/helpers/helpers";

const search = async (search_query, options) => {
  try {
    const response =
      (await request("search", { search_query, ...options })) || {};
    return response?.result ?? [];
  } catch (error) {
    console.log(error);
  }
};

export const getRelated = async (
  related_type = "similar",
  search_item_id,
  options
) => {
  try {
    const response =
      (await request("getRelated", {
        related_type,
        search_item_id,
        ...options,
      })) || {};
    return response?.items || [];
  } catch (error) {
    console.log(error);
  }
};

export default search;
