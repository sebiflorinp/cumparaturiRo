<template>
  <p> {{ dbCategorii.gasesteCategorie(1) }}</p>
  <div v-if="this.tip == 'categorie'" class="card">
    <img src="../assets/as.png" alt="img">
    <p class="text"> text </p>
  </div>
  <div v-else class="card">
    <img src="../assets/lupa.png" alt="img">
    <p class="text">200 lei</p>
    <p class="text"> text </p>
  </div>
</template>

<script setup>
  import { useCategorii } from '@/stores/categorii'
  const props = defineProps(['tip', 'idCategorie'])

  const dbCategorii = useCategorii()
</script>


<style scoped>
  @import '../css/Card.css';
</style>