import axios from "axios";
export const BASE_URL = "https://baconipsum.com/api/";
export const getText = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      type: "all-meat",
      sentences: "3",
      format: "text",
    },
  });
  return response.data;
};
