<template>
<div class="content">
  <router-link to="/recipes"> Retour aux recettes </router-link>
  <div class="card">
    <img src="https://assets.afcdn.com/recipe/20160624/1254_w300h400c1cx1872cy2169.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{recipe.name}} </h5>
      <p class="card-text"> {{recipe.description}} </p>
      <p class="card-text"> Créée par : {{ userCreator }} </p>
    </div>
  </div>
</div>
  
</template>

<script>
import { getRecipeById } from '../../helpers/recipes';
import { getCookById } from '../../helpers/cooks';
import RecipesVue from './Recipes.vue';
import { mapMutations } from "vuex";

export default {
  name: "RecipeById",
  data() {
    return {
      userCreator: String,
      recipe: RecipesVue,
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapMutations({
      showLoading: 'LOADING_SPINNER_SHOW_MUTATION',
    })
  },
  mounted() {
    this.showLoading({val: true});

    getRecipeById(this.id).then(response => {
      this.recipe = response.data;

    getCookById(this.recipe.creator_id).then(user => {
      this.userCreator = user.data.pseudo;
      this.showLoading({val: false});
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

.content {
  margin-bottom: 10%;
}
</style>