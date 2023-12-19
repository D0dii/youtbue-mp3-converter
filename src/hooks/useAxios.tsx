import axios from "axios";

export default async function useAxios(ID: string) {
  const options = {
    method: "GET",
    url: "https://youtube-mp36.p.rapidapi.com/dl",
    params: { id: ID },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
