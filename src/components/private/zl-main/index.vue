<template>
  <div class="zl-main">
    <zl-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import ZlMenu from "@/components/private/zl-menu";
import ZlUseage from "@/components/private/zl-useage";
import ZlExhibition from "@/components/private/zl-exhibition";
export default {
  components: {
    ZlMenu,
    ZlUseage,
    ZlExhibition
  },
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
.zl-main {
  display: flex;
}
</style>
