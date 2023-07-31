<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    _isAgreementPage(){
      let flag = window.location.pathname.match(
        /(dacheng-use-clauses|dacheng-privacy|dacheng-user-agreement)/i
      );
      return flag;
    }
  },
  mounted() {
    if (this._isMobile()&&!this._isAgreementPage()) {
      window.location.href = 'https://h5.dachengoffer.com';
    }
  }
};
</script>

<style>
</style>
