<template>

<div class="card" style="width: 18rem;">
  <img src="https://assets.afcdn.com/recipe/20160624/1254_w300h400c1cx1872cy2169.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> {{ name }}</h5>
    <router-link v-bind:to="'/recipes/' + this.id " class="btn btn-primary" > Plus de détails... </router-link> <br>
    <router-link v-bind:to="'/edit-recipe/' + this.id " class="btn btn-warning" v-if="creator" > Modifier </router-link> <br>
    <button v-on:click="test" class="btn btn-danger"  v-if="creator"> Supprimer </button>
  </div>
</div>
</template>

<script>
import { deleteRecipe } from '../../helpers/recipes';
export default {
  name: "recipe",
  props: ["name", "id"],
  data() {
    return {
      creator: false,
    } 
  },
  methods: {

    creatorOrNot() {
      if (this.$route.fullPath == "/my-recipes") {
        this.creator = true;
      }      
    },

    test: function(){
      deleteRecipe(this.$store.getters['auth/token'], this.id).then( () => {
          this.$forceUpdate();
        }).catch(error => {
            console.log(error)
        },
      )
    }
    
  },
  beforeMount(){
    this.creatorOrNot();
  },
};
</script>

<style scoped>
  p {
    color : crimson;
  }

  .card {
    margin-bottom: 5%;
  }
</style>