<template>
  <div class="zl-menu">
    <ul>
      <li v-for="(item, index) in menus" :key="index">
        <router-link to>{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  props: {},
  computed: {
    ...mapState({
      menus: state => state.menu.menus
    })
  },
  data() {
    return {};
  },
  watch: {},
  methods: {},
  created() {
    console.log(this.menus);
  },
  destroyed() {}
};
</script>

<style lang='less' scoped>
.zl-menu {
  position: fixed;
  width: 140px;
  background: #fff;
  left: 0;
  z-index: 0;
  top: 40px;
  padding: 25px 0 30px;
  overflow-y: scroll;
  border-right: 1px solid #f1f4f8;
  box-shadow: 0 8px 12px #ebedf0;
  height: calc(100% - 90px);
  ul {
    padding: 0 5px 0 10px;
    li {
      font-size: 12px;
      color: #666;
      line-height: 24px;
      &:hover {
        color: #333;
      }
    }
  }
}
</style>
