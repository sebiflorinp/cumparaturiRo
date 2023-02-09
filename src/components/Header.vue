<template>
  <div class="header">
    <RouterLink :to ="{name: 'Pagina principala'}" class="logoIntoarcere" v-if="!afisez">Cumparaturi.ro</RouterLink>
    <p v-else></p>
    <ul class="containerButoane">
      <li class="buton"><a href="http://localhost:8080/cautare">Cont</a></li>
      <li class="buton">Cos</li>
      <li class="buton">Vinde</li>
      <li class="buton">Setari</li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      afisez(){
        return this.$route.name == "Pagina principala" ? true : false
      }
    }
  }
</script>

<style scoped>
  @import '../css/Header.css';
</style>