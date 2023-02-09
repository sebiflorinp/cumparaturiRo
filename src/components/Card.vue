<template>
  <div v-if="this.tip == 'categorie'" class="card">
    <img src="../assets/lupa.png" alt="img">
    <p class="text"> text </p>
  </div>
  <div v-else class="card">
    <img src="../assets/lupa.png" alt="img">
    <p class="text">200 lei</p>
    <p class="text"> text </p>
  </div>
</template>

<script>
  export default {
    props: ['tip'],
  }
</script>


<style scoped>
  @import '../css/Card.css';
</style>