<template>
  <h1>Nouvelle recette !</h1>

  <div class="text-center">
      <form @submit.prevent="handleSubmit" class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Créer une nouvelle recette</h1>
      <label for="inputRecipeName" class="sr-only">Nom</label>
      <input v-model="credentials.name" type="text" id="inputRecipeName" class="form-control" placeholder="Nom" required autofocus>
      <label for="inputDescription" class="sr-only">Description</label>
      <input v-model="credentials.description" type="text" id="inputDescription" class="form-control" placeholder="Description" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Créer</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import { createRecipe } from "../../helpers/recipes.js";

export default {
  name: "newRecipe",
  data() {
    return {
      credentials: {
        name: "",
        description: "",
        creator_id: this.$store.getters['auth/userId'],
      }
    };
  },
  methods: {
      ...mapMutations({
          showLoading: 'LOADING_SPINNER_SHOW_MUTATION',
      }),
      handleSubmit() {
        this.showLoading({val: true});
        createRecipe(this.$store.getters['auth/token'], this.credentials).then(() => {
          this.$router.replace({
            path:'/my-recipes'
          })
          this.showLoading({val: false});
        })
        .catch( () => {
          this.showLoading({val: false});
        })
      }
    }
}
</script>

<style scoped>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
</style>