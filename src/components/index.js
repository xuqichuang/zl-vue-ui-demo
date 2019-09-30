import Vue from "vue";

import {
  ZlDialogPlugin,
  ZlLoadingPlugin,
  ZlToastPlugin,
  ZlConfirmPlugin,
  ZlAlertPlugin,
  ZlNotifyPlugin
} from "zl-vue-ui";

Vue.use(ZlDialogPlugin);
Vue.use(ZlLoadingPlugin);
Vue.use(ZlToastPlugin);
Vue.use(ZlConfirmPlugin);
Vue.use(ZlAlertPlugin);
Vue.use(ZlNotifyPlugin);
// 全局组件配置
const components = () => {
  if (components.installed) {
    return;
  }
};
export default components;
