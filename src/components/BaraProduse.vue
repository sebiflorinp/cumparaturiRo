<template>
  <div class="containerCard">
    <Card v-for="index in 5" :tip = "this.tip" :idCategorie ="dbCategorii.categoriePopulara(index - 1)"/>
  </div>
</template>

<script setup>
  import Card from './Card.vue';
  import { useCategorii } from '@/stores/categorii'

  const dbCategorii = useCategorii()

  const props = defineProps(['tip'])
</script>

<style scoped>
  @import '../css/BaraProduse.css';
</style>

