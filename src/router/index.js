import Vue from "vue";
import Router from "vue-router";
import Home from "views/home";
import Introduction from "views/introduction";
import Donation from "views/donation";
import ZlLayout from "components/private/zl-layout";

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
        // {
        //   path: "donation",
        //   name: "捐赠",
        //   component: Donation
        // }
      ]
    },
    {
      path: "**",
      redirect: "/"
    }
  ]
});
