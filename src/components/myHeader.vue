<template>
  <div class="nav">
    <router-link to="/">
      <div class="nav-logo">
        <img src="@/assets/img/01-导航栏/logo.png" alt="大乘offer">
      </div>
    </router-link>
    <div @click="changeLang" class="nav-language">
      <img v-if="$i18n.locale==='zh'" src="@/assets/img/01-导航栏/中文icon.png">
      <img v-else src="@/assets/img/01-导航栏/英文icon.png">
      <span>{{ $t('language') }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myHeader',
    methods:{
      changeLang() {
        let locale = localStorage.getItem('language')||'zh';
        let temp = locale === 'zh' ? 'en' : 'zh';
        this.$i18n.locale = localStorage.language = temp;//改变当前语言
      }
    }
  }
</script>

<style lang="less">
  .nav{
    display: flex;
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 60px;
    background-color: #fff;
    .nav-logo{
      width: fit-content;
      img{
        height: 31px;
      }
    }
    .nav-language{
      img{
        width: 30px;
      }
      width: 100px;
      cursor: pointer;
      position: absolute;
      right: 0;
      span{
        user-select: none;
        font-size: 15px;
        padding-left: 10px;
      }
    }
  }
</style>