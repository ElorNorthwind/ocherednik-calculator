import axios from "axios";

export default async function getAdressSearch(term: string) {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_API_URL}/adress`,
    params: {
      term: term,
    },
    // headers: {
    //   "Content-Type": "application/json",
    // },
  };

  try {
    const res = await axios.request(config);
    return res.data;
  } catch (e) {
    console.log("Ошибка при обращении к dom.mos.ru!");
    console.log(e);
  }
}
