<template>
    <Header />
    <Spinner v-if="showLoader"></Spinner>
    <router-view></router-view>
    <Footer />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Spinner,
  },
  computed: {
    ...mapState({
      showLoader: (state) => state.showLoader,
    })
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  margin-bottom: 0;
}
</style>
