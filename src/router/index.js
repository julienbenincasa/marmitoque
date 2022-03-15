import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Recipes from '../components/recipes/Recipes.vue';
import RecipesById from '../components/recipes/RecipeDetails.vue';
import CooksById from '../components/cooks/Cook.vue';
import MyRecipes from '../components/recipes/MyRecipes.vue';
import NewRecipe from '../components/recipes/NewRecipe.vue';
import EditRecipe from '../components/recipes/EditRecipe.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/recipes",
      component: Recipes
    },
    {
      path: "/recipes/:id",
      component: RecipesById
    },
    {
      path: "/my-recipes",
      component: MyRecipes
    },
    {
      path: "/cooks/:id",
      component: CooksById
    },
    {
      path: "/newRecipe",
      component: NewRecipe
    },
    {
      path: "/edit-recipe/:id",
      component: EditRecipe
    },
  ],
});

export default router;
