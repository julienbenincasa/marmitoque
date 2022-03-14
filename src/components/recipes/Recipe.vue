<template>

<div class="card" style="width: 18rem;">
  <img src="https://assets.afcdn.com/recipe/20160624/1254_w300h400c1cx1872cy2169.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> {{ name }}</h5>
    <p class="card-text"> {{ description }} </p>
    <a v-bind:href="'recipes/' + this.id " class="btn btn-primary" > Plus de détails...</a>
  </div>
</div>
</template>

<script>
export default {
  name: "recipe",
  props: ["name", "description", "id"],
};
</script>

<style scoped>
  p {
    color : crimson;
  }
</style>