import Vue from "vue";
import Router from "vue-router";

const ZlLayout = () =>
  import("components/private/zl-layout").then(m => m.default); //
const Donation = () => import("views/donation").then(m => m.default); //
const Introduction = () => import("views/introduction").then(m => m.default); //
const Home = () => import("views/home").then(m => m.default); //
const ZlActionSheet = () =>
  import("views/packages/actionsheet").then(m => m.default); //

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
      path: "/introduction",
      name: "介绍",
      component: Introduction,
      meta: {}
    },
    {
      path: "/",
      name: "捐赠",
      component: ZlLayout,
      meta: {},
      children: [
        {
          path: "donation",
          name: "捐赠",
          component: Donation
        }
      ]
    },
    {
      path: "/components",
      name: "组件",
      component: ZlLayout,
      meta: {},
      children: [
        {
          path: "ZlActionSheet",
          name: "上拉菜单",
          component: ZlActionSheet
        }
      ]
    },
    {
      path: "**",
      redirect: "/"
    }
  ]
});
