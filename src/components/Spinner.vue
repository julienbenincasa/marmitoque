<template>
<div class="d-flex bgLoader">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
</template>

<script>
export default {
  name: "spinner"
}
</script>

<style scoped>
.spinner-border {
  width: 100px;
  height: 100px;
  margin-bottom: 154px;
}

.bgLoader {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(228, 228, 228);
}
</style> 