<template>
<thead>
  <h1>Recipes</h1>
</thead>

<tbody>
  <div class="content">
  <Recipe
        v-for="recipe in recipes"
        v-bind:name="recipe.name"
        v-bind:description="recipe.description"
        v-bind:id="recipe._id"
        :key="recipe.name"
      />
  </div>
</tbody>


</template>

<script>
import Recipe from "../recipes/Recipe.vue";
import { getAllRecipes } from "../../helpers/recipes.js";

export default {
  name: "Recipes",
  components: {
    Recipe,
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    getAllRecipes().then(response => {
      this.recipes = response.data;
    })
    .catch(error => console.log(error));
  },
};

</script>

<style scoped>
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    gap: 10em;
  }
</style>