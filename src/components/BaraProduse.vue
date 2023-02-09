<template>
  <div class="containerCard">
    <Card :tip = "this.tip"/>
    <Card :tip = "this.tip"/>
    <Card :tip = "this.tip"/>
    <Card :tip = "this.tip"/>
    <Card :tip = "this.tip"/>
  </div>
</template>

<script>
  import Card from './Card.vue';

  export default {
    props:['tip'],
    components: {
      Card,
    }
  }
</script>

<style scoped>
 @import '../css/BaraProduse.css';
</style>

