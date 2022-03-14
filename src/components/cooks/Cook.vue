<template>
  <h1>Page des cuisinier</h1>
</template>

<script>
import { getCookById } from "../../helpers/cooks.js";

export default {
  name: "Cook",
  data() {
    return {
      cookNickname: String, 
      id: this.$route.params.id,
    };
  },
  mounted() {
    getCookById(this.id).then(response => {
      this.cookNickname = response.data.pseudo;
    })
    .catch(error => console.log(error));
  }
}
</script>

<style>

</style>