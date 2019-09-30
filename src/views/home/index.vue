<template>
  <div class="container">
    <div class="page-header">
      <h1 class="project-name">zl-vue-ui</h1>
      <h2 class="project-tagline">vue 移动端 UI 组件库</h2>
      <a href="https://github.com/xuqichuang/zl-vue-ui" class="btn">view on github</a>
      <router-link to="/introduction" class="btn">查看文档</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.container {
  padding: 0 0 50px 0;
}
.page-header {
  padding: 50px;
  color: #fff;
  text-align: center;
  background-color: #159957;
  background-image: linear-gradient(120deg, #155799, #159957);
  .project-name {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 20px;
  }
  .project-tagline {
    font-size: 26px;
    margin-bottom: 40px;
    font-weight: normal;
    opacity: 0.7;
  }
  .btn {
    display: inline-block;
    margin-bottom: 60px;
    color: rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 20px;
    font-size: 30px;
    transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  }
  .btn:hover {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
