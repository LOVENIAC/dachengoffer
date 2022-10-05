<template>
  <div class="nav">
    <div class="nav-logo">
      <img src="@/assets/img/01-导航栏/logo.png" alt="大乘offer">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myHeader'
  }
</script>

<style lang="less">
  .nav{
    height: 60px;
    background: url('@/assets/img/01-导航栏/nav-background.png') no-repeat;
    .nav-logo{
      width: 1200px;
      height: 60px;
      display: flex;
      align-items: center;
      margin: 0 auto;
      img{
        height: 31px;
      }
    }
  }
</style>