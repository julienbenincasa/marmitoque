import axios from "axios";
export const getCookById = (id) => {
  return axios.get("https://marmitoque-server.herokuapp.com/cooks/" + id)
}