const { request } = require("@/helpers/helpers");

export const getPlayList = async (search_query, options) => {
  try {
    const response =
      (await request("search", {
        search_query,
        search_photo: false,
        search_vector: false,
        search_video: false,
        search_audio: true,
        ...options,
      })) || {};
    return response?.result ?? [];
  } catch (error) {
    console.log(error);
  }
};

export const getGenresList = async () => {
  try {
    const response = (await request("audio.genres.getList")) || {};
    return response?.result ?? [];
  } catch (error) {
    console.log(error);
  }
};
