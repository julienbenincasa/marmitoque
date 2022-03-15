<template>
  <div class="text-center">
      <form @submit.prevent="handleSubmit" class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Se connecter</h1>
      <label for="inputEmail" class="sr-only">E-mail</label>
      <input v-model="credentials.email" type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus>
      <label for="inputPassword" class="sr-only">Mot de passe</label>
      <input v-model="credentials.password" type="password" id="inputPassword" class="form-control" placeholder="Mot de passe" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Se souvenir de moi
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import { mapMutations } from "vuex"

export default {
    name: "login",
    data() {
    return {
      credentials: {
        email: "",
        password: ""
      }
    };
  },
    methods: {
      ...mapActions({
        signIn: 'auth/signIn'
      }),
      ...mapMutations({
          showLoading: 'LOADING_SPINNER_SHOW_MUTATION',
      }),
      handleSubmit() {
        this.showLoading({val: true});
        this.signIn(this.credentials).then(() => {
          this.$router.replace({
            path:'/home'
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