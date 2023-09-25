<template>
  <div class="nav">
    <router-link to="/">
      <div class="nav-logo">
        <img
          src="@/assets/img/01-导航栏/logo.png"
          alt="大乘offer"
        >
      </div>
    </router-link>
    <div class="nav-tabs">
      <div
        v-for="tab in tabList"
        :key="tab.index"
        @click="changeRouter(tab)"
        :class="tab.index === selectTabIndex ? 'tab-items selected' : 'tab-items'"
      >{{ tab.name }}</div>
    </div>
    <div
      v-show="selectTabIndex!==1"
      @click="changeLang"
      class="nav-language"
    >
      <img
        v-if="$i18n.locale==='zh'"
        src="@/assets/img/01-导航栏/中文icon.png"
      >
      <img
        v-else
        src="@/assets/img/01-导航栏/英文icon.png"
      >
      <span>{{ $t('language') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  created(){
    this.tabList.forEach(tab=>{
      if(tab.path == this.$route.path) this.selectTabIndex = tab.index;
    })
  },
  methods: {
    changeLang() {
      let locale = localStorage.getItem("language") || "zh";
      let temp = locale === "zh" ? "en" : "zh";
      this.$i18n.locale = localStorage.language = temp; //改变当前语言
    },
    changeRouter(tab) {
      // console.log(tab);
      this.selectTabIndex = tab.index;
      this.$router.push(tab.path)
    },
  },
  data() {
    return {
      selectTabIndex: 0,
      tabList: [
        {
          index: 1,
          name: "大乘留学",
          path: '/dacheng-abroad'
        },
        {
          index: 2,
          name: "大乘offer",
          path: '/dacheng-offer'
        },
      ],
    };
  },
};
</script>

<style lang="less">
.nav {
  display: flex;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: 1200px;
  height: 60px;
  background-color: #fff;
  .nav-tabs {
    padding-left: 198px;
    display: flex;
    .tab-items {
      width: fit-content;
      line-height: 60px;
      height: 60px;
      margin-right: 90px;
      font-size: 20px;
      font-weight: normal;
      user-select: none;
    }
    .selected {
      border-bottom: 3px solid #428dfe;
    }
    .tab-items:hover {
      border-bottom: 3px solid #428dfe;
      transition: 0.1s all linear;
    }
  }
  .nav-logo {
    width: fit-content;
    img {
      height: 31px;
    }
  }
  .nav-language {
    img {
      width: 30px;
    }
    width: 100px;
    cursor: pointer;
    position: absolute;
    right: 0;
    span {
      user-select: none;
      font-size: 15px;
      padding-left: 10px;
    }
  }
}
</style>