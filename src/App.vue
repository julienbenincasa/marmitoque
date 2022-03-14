<template>
    <Header />
    <router-view></router-view>
    <Footer />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
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
