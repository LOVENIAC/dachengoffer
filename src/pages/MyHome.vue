<template>
  <div>
    <!-- Headers -->
    <MyHeader></MyHeader>
    <!-- contents -->
    <!-- <MyAbroad v-if="tabIndex === 1"></MyAbroad>
    <MyOffer v-else></MyOffer> -->
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