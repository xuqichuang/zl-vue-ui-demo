import Vue from "vue";
import Router from "vue-router";

const Home = () => import("views/home").then(m => m.default); //
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "zl-vue-ui",
      component: Home,
      meta: {}
    },
    {
      path: "**",
      redirect: "/"
    }
  ]
});
