<template>
  <div>
    <!-- Headers -->
    <MyHeader></MyHeader>
    <!-- contents -->
    <router-view></router-view>
    <!-- Footer -->
    <HomeFooter />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import HomeFooter from "@/components/HomeFooter";

export default {
  name: "MyHome",
  components: {
    MyHeader,
    HomeFooter,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
</style>