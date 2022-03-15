<template>
    <Header />
    <Spinner v-if="showLoader"></Spinner>
    <div class="content">
    <router-view></router-view>
    </div>
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

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

.content {
  margin-bottom: 5%;
  margin-top: 2%;
}

#app {
  height: 100%;
  margin-bottom: 0;
}
</style>
