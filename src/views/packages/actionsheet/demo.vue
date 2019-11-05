<template>
  <zl-exhibition>
    <div>
      <zl-switch v-model="show"></zl-switch>
      <zl-action-sheet
        :options="actionOptions"
        v-model="show"
        disabled="disabled"
        @on-cancel="cancel"
        @on-select="select"
      ></zl-action-sheet>
    </div>
  </zl-exhibition>
</template>

<script>
import ZlExhibition from "components/private/zl-exhibition";
import { ZlActionSheet, ZlSwitch } from "zl-vue-ui";
export default {
  components: {
    ZlExhibition,
    ZlActionSheet,
    ZlSwitch
  },
  data() {
    return {
      show: false,
      actionOptions: [
        {
          name: "标题1",
          id: 123,
          disabled: true
        },
        {
          name: "标题2",
          id: 1234
        },
        {
          name: "标题3",
          id: 1235
        }
      ]
    };
  },
  methods: {
    cancel() {},
    select() {}
  }
};
</script>

<style lang='less' scoped>
</style>
