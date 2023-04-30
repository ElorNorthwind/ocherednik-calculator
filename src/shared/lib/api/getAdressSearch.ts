import axios from "axios";

export default async function getAdressSearch(text: string) {
  const data = JSON.stringify(["SIMPLE_ADDRESS", "ADM_AREA", "P5"]);
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://apidata.mos.ru/v1/datasets/60562/rows",
    params: {
      $orderby: "global_id",
      $top: 30,
      api_key: import.meta.env.VITE_DATA_MOS_API_KEY, // That key is totaly exposed to client... Goddamnit, now I will have to wright a backend...
      $filter: `Cells/SIMPLE_ADDRESS eq '${text}'`,
    },
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.request(config);
    return res.data;
  } catch (e) {
    console.log("Ошибка при обращении к data.mos.ru!");
    console.log(e);
  }
}
