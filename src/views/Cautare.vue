<template>
  <div class="containerAnunt">
    <p class="textAnunt">Anunturi</p>
  </div>
  <div class="containerBaraDeCautare">
    <BaraCautare></BaraCautare>
  </div>
  <div class="containerRezultat">
    <p class="aiCautat">Ai cautat:</p>
    <p class="rezultat">"{{ this.$route.params.cautat }}"</p>
  </div>
  <Filtre/>
</template>

<script>
  import BaraCautare from '@/components/BaraCautare.vue';
  import Filtre from '@/components/Filtre.vue';
  export default {
    components: {
      BaraCautare,
      Filtre,
    },
  }
</script>


<style>
 @import '../css/cautare.css';
</style>