import axios from "axios";

export default async function getAdressDetails(id: string) {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_API_URL}/adress/${id}`,
  };

  try {
    const res = await axios.request(config);
    return res.data;
  } catch (e) {
    console.log("Ошибка при обращении к dom.mos.ru!");
    console.log(e);
  }
}
