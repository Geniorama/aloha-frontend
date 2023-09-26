import { request } from "@/helpers/helpers";

const getMediaData = async (media_id, options) => {
  try {
    const response = await request("getMediaData", {
      media_id,
      ...options,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getMediaData;
