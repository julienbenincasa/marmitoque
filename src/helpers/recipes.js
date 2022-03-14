import axios from "axios";
export const getAllRecipes = () => {
  return axios.get("https://marmitoque-server.herokuapp.com/recipes");
}

export const getRecipeById = (id) => {
  return axios.get("https://marmitoque-server.herokuapp.com/recipes/" + id)
}