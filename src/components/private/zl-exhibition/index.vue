<template>
  <div class="zl-exhibition">
    <slot></slot>
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
.zl-exhibition {
  position: fixed;
  right: 20px;
  width: 260px;
  background: #fff;
  z-index: 0;
  top: 80px;
  padding: 25px 0 30px;
  overflow-y: scroll;
  border-left: 1px solid #f1f4f8;
  height: calc(100% - 245px);
  border-radius: 5px;
  z-index: 10000;
}
</style>
