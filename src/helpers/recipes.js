import axios from "axios";
export const getAllRecipes = () => {
  return axios.get("https://marmitoque-server.herokuapp.com/recipes");
}

export const getRecipeById = (id) => {
  return axios.get("https://marmitoque-server.herokuapp.com/recipes/" + id)
}

export const getMyRecipes = (token) => {
  return axios.get("https://marmitoque-server.herokuapp.com/recipes/of/user", {headers: {"Authorization" : `Bearer ${token}`}})
}

export const createRecipe = (token, recipe) => {
  return axios.post("https://marmitoque-server.herokuapp.com/recipes", recipe, {headers: {"Authorization" : `Bearer ${token}`}});
}

export const deleteRecipe = (token, id) => {
  return axios.delete("https://marmitoque-server.herokuapp.com/recipes/"+id, {headers: {"Authorization" : `Bearer ${token}`}});
}

export const editRecipe = (token, id, recipe) => {
  console.log("On est bien dedans");
  return axios.put("https://marmitoque-server.herokuapp.com/recipes/"+id, recipe, {headers: {"Authorization" : `Bearer ${token}`}});
}