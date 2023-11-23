import { request } from "@/helpers/helpers";

export const getMedia = async (payload) => {
  try {
    const response = await request("getMedia", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};
