<template>
  <div class="actionsheet">
    <zl-useage>
      <mavon-editor
        v-model="md"
        :editable="editable"
        :default-open="defaultOpen"
        :toolbarsFlag="toolbarsFlag"
        :subfield="subfield"
      />
    </zl-useage>
    <zl-demo />
  </div>
</template>

<script>
import { mapState } from "vuex";
import readme from "./README.md";
import ZlUseage from "components/private/zl-useage";
import ZlDemo from "./demo";
export default {
  components: {
    ZlDemo
  },
  data() {
    return {
      md: readme
    };
  },
  computed: {
    ...mapState({
      editable: state => state.mavonEditor.editable,
      defaultOpen: state => state.mavonEditor.defaultOpen,
      toolbarsFlag: state => state.mavonEditor.toolbarsFlag,
      subfield: state => state.mavonEditor.subfield
    })
  }
};
</script>
