import { request } from "@/helpers/helpers";

const getKeywoards = async (type, options) => {
  try {
    const response = (await request("getTagCloud", { type, ...options })) || [];
    const data = [];
    if (response.result) {
      for (let keywoard of response.result) {
        data.push(keywoard.name);
      }
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getKeywoards;
