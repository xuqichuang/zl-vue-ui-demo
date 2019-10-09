// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";
import "@/assets/less/global.less";
import "lib-flexible/flexible";
Vue.config.productionTip = false;
// markdown 编辑器
import ZlUseage from "components/private/zl-useage";
import ZlExhibition from "components/private/zl-exhibition";
import "mavon-editor/dist/css/index.css";
import mavonEditor from "mavon-editor";
// use

Vue.use(mavonEditor);
Vue.component("zl-exhibition", ZlExhibition);
Vue.component("zl-useage", ZlUseage);
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
