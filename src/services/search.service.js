import { request } from "@/helpers/helpers";

const search = async (search_query, options) => {
  try {
    const response = await request("search", { search_query, ...options });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default search;
