<template>
  <div class="ceva">
    <div class="containerBaraCautare">
      <input :class="paginaCurenta" type="text">
      <div :class="img"><img class="lupa" src="../assets/lupa.png" alt="lupa"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        paginaCurenta: "baraCautare",
        img: "img"
      }
    },

    mounted(){
      this.paginaCurenta += this.$route.name == 'Cautare' ? ' baraCautarePCautare' : ''
      this.img += this.$route.name == 'Cautare' ? ' imgPCautare' : ''
    }
  }
</script>

<style scoped>
  @import '../css/BaraCautare.css';
</style>