<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this.$route);
  }
};
</script>

<style lang="less">
@import "./assets/less/1px.less";
</style>
