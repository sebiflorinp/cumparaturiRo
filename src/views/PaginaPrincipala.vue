<template>
  <p class="logo">CUMPARATURI.RO</p>
  <BaraCautare/>
  <p class="numeBaraProduse">Categorii populare</p>
  <BaraProduse tip="categorie"/>
  <p class="numeBaraProduse">Anunturi promovate</p>
  <BaraProduse tip="produs"/>
  <p class="numeBaraProduse">Anunturi recente</p>
  <BaraProduse tip="produs"/>
</template>

<script>
import Header from '../components/Header.vue'
import BaraCautare from '../components/BaraCautare.vue';
import BaraProduse from '../components/BaraProduse.vue';

export default {
  components: {
    Header,
    BaraCautare,
    BaraProduse,
  },

}

</script>

<style lang="scss" scoped>
@import '../css/app.css';
</style>
