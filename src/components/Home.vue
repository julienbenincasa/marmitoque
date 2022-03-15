<template>
<div class="content">
  <div class="divText">
    Bienvenue sur Marmitoque !
  </div>


    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=" class="d-block" alt="image1">
      </div>
      <div class="carousel-item">
        <img src="https://la1ere.francetvinfo.fr/saintpierremiquelon/sites/regions_outremer/files/styles/top_big/public/assets/images/2021/01/21/chef_michel_dumas-1570976.jpg?itok=vK4hyr15" class="d-block" alt="image2">
      </div>
      <div class="carousel-item">
        <img src="https://cdn.radiofrance.fr/s3/cruiser-production/2019/12/8b40e06d-0d51-45d9-a90a-36506b8d7943/870x489_maxpeopleworldtwo050500.jpg" class="d-block" alt="image3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


  
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  background-color: grey;
  width: 40%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.divText {
  font-size: 5em;
  font-family: sans-serif;
  color: rgb(51, 51, 51);
}
</style>