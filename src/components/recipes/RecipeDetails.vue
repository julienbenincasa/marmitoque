<template>
  <a href="/recipes"> Retour aux recettes </a>
  <div class="card">
  <img src="https://assets.afcdn.com/recipe/20160624/1254_w300h400c1cx1872cy2169.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> {{recipe.name}} </h5>
    <p class="card-text"> {{recipe.description}} </p>
    <p class="card-text"> Créée par : {{ userCreator }} </p>
  </div>
</div>
</template>

<script>
import { getRecipeById } from '../../helpers/recipes';
import { getCookById } from '../../helpers/cooks';
import RecipesVue from './Recipes.vue';
export default {
  name: "RecipeById",
  data() {
    return {
      userCreator: String,
      recipe: RecipesVue,
      id: this.$route.params.id,
    };
  },
  mounted() {
    getRecipeById(this.id).then(response => {
      this.recipe = response.data;

    getCookById(this.recipe.creator_id).then(user => {
      this.userCreator = user.data.pseudo;
    })
    .catch(error => console.log(error));
    })
    .catch(error => console.log(error));

    
  }
}
</script>

<style scoped>
.card{
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
  width: 40%;
}

.card-img-top {
  margin: 0 auto;
  width: 45%;
}

a {
  padding: .2em 1.2em;
  color: black;
  text-decoration: none;
  margin-left: 10px;
  background-color: rgb(228, 228, 228);
  border: none;
  box-shadow: 1px 1px 3px grey;

}
a:hover {
  color: black;
  text-decoration: none;
  background-color: rgb(192, 192, 192);

  box-shadow: 1px 1px 3px rgb(123, 118, 138);

}
</style>