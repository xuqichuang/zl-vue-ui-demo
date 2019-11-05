// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router/exhibition";
import store from "./store";
import "@/assets/css/reset.css";
import "@/assets/less/global.less";
import "lib-flexible/flexible";
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});