<template>
  <div class="zl-header">
    <div class="left">
      <img src="./img/favicon.png" />
      <span class="title">zl-vue-ui</span>
    </div>
    <div class="right">
      <ul>
        <li>
          <router-link to="/donation">捐赠</router-link>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/zl-vue-ui" target="_blank">
            <img
              alt="npm"
              src="https://img.shields.io/npm/v/zl-vue-ui?color=rgb%28210%2C%20164%2C%20126%29&style=for-the-badge"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/xuqichuang/zl-vue-ui" target="_blank">发布日志</a>
        </li>
        <li>
          <a href="https://github.com/xuqichuang/zl-vue-ui" target="_blank">Github</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  computed: {},
  data() {
    return {};
  },
  watch: {},
  methods: {},
  mounted() {},
  destroyed() {}
};
</script>

<style lang='less' scoped>
.zl-header {
  width: 100%;
  background: @bg-color;
  box-sizing: border-box;
  padding: 0 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #eee;
  position: fixed;
  z-index: 10000;
  .left {
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      overflow: hidden;
    }
    .title {
      font-size: 20px;
      color: #eee;
      margin-left: 5px;
    }
  }
  .right {
    font-size: 14px;
    ul {
      display: flex;
      li {
        position: relative;
        margin-left: 5px;
        &:hover,
        &.active {
          color: #fff;
        }
        &:hover:after,
        &.active {
          position: absolute;
          display: block;
          content: "";
          height: 2px;
          width: 100%;
        }
        &:hover:after {
          background: #ccc;
        }
        &.active {
          background: red;
        }
      }
    }
  }
}
</style>
