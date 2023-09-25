<template>
  <div @click="hideQRcode" v-show="$store.state.isCover" class="cover">
  </div>
</template>

<script>
  export default {
    name: 'HomeCover',
    methods:{
      hideQRcode(){
        this.$store.commit('HIDECOVER');
      }
    }
  }
</script>

<style>
  .cover{
    z-index: 280;
    background-color: #000;
    opacity: 0.66;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>