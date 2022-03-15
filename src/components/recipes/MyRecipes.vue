<template>
  <h1> Mes recettes </h1>

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
import { getMyRecipes } from '../../helpers/recipes';
import Recipe from "../recipes/Recipe.vue";
import { mapMutations } from "vuex";



export default {
  name: "myRecipes",
  components: {
    Recipe,
  },
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    ...mapMutations({
      showLoading: 'LOADING_SPINNER_SHOW_MUTATION',
    })
  },
  mounted() {
    this.showLoading({val: true});
    getMyRecipes(this.$store.getters['auth/token']).then(response => {
      console.log(response.data);
      this.recipes = response.data;
      this.showLoading({val: false});
    })
    .catch(error => {
      console.log(error)
      this.showLoading({val: false});
    });
  },
}
</script>

<style scoped>
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    gap: 10em;
  }

  h1 {
    text-align: center;
  }
</style>