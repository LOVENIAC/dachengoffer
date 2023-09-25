<template>
  <div v-show="$store.state.qRCodeStatus" class="serviceQRcodeWrap">
    <div @click="hideQRcode" class="closeQRcode">
      <img src="@/assets/img/08-弹窗/关闭-按钮.png">
    </div>
    <div class="addTips">
      {{ $t('QRcode.QRcode-title') }}
    </div>
    <div class="serviceQRcode">
      <img src="@/assets/img/08-弹窗/二维码.png">
    </div>
    <div class="knowMore">
      {{ $t('QRcode.QRcode-tips') }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServiceQRcode',
    methods:{
      hideQRcode(){
        this.$store.commit('HIDEQRCODE');
      }
    }
  }
</script>

<style lang="less">
  .serviceQRcodeWrap{
    position: relative;
    z-index: 300;
    height: 400px;
    width: 600px;
    background: url('https://nodestatic.fbstatic.cn/pan/downloads/c0f6f363ac772507208348dcf3e4452d.png');
    border-radius: 30px;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    overflow: hidden;
    .closeQRcode{
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
      img{
        width: 50px;
        height: 30px;
      }
    }
    .addTips{
      font-size: 24px;
      color: #fff;
      width: fit-content;
      padding-top: 28px;
      margin: 0 auto;
      font-weight: 400;
    }
    .serviceQRcode{
      padding-top: 60px;
      margin: 0 auto;
      width: fit-content;
      img{
        border-radius: 15px;
        width: 200px;
        height: 200px;
      }
    }
    .knowMore{
      text-align: center;
      font-size: 18px;
      color: #fff;
      width: fit-content;
      padding-top: 25px;
      margin: 0 auto;
      font-weight: 400;
    }
  }
</style>