<template>
  <Transition name="container" appear>
    <div v-show="$store.state.dialogStatus" class="dialogWrap">
      <div class="close-btn" @click="hideDialog()"></div>
      <div class="QRcode"></div>
    </div>
  </Transition>
</template>

<script>
  export default {
    name: 'dialogPop',
    methods:{
      hideDialog(){
        this.$store.commit('POPDOWNS');
      }
    }
  }
</script>

<style lang="less" scoped>
  .dialogWrap{
    overflow: hidden;
    animation: a 0.5s linear;
    background: url('@/assets/img/10-首页弹窗/弹窗.png') no-repeat;
    background-size: 100%;
    text-align: center;
    padding: 30px;
    z-index: 300;
    width: 576px;
    height: 656px;
    border-radius: 25px;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    .close-btn{
      background-image: url('@/assets/img/10-首页弹窗/弹窗关闭按钮.png');
      background-size: 100%;
      width: 40px;
      height: 28px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }
    .QRcode{
      background-image: url('@/assets/img/08-弹窗/二维码.png');
      position: absolute;
      background-size: 100%;
      width: 100px;
      height: 100px;
      left: 395px;
      top: 505px;
      border-radius: 8px;
    }
  }
  .container-enter-active,
  .container-leave-active{
    transition: all 0.5s ease;
  }
  .container-enter,
  .container-leave-to{
    opacity: 0;
    width: 0;
    height: 0;
  }
</style>