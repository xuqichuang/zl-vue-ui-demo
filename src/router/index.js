import Vue from "vue";
import Router from "vue-router";

const ZlLayout = () =>
  import("components/private/zl-layout").then(m => m.default); //
const Donation = () => import("views/donation").then(m => m.default); //
const Introduction = () => import("views/introduction").then(m => m.default); //
const Home = () => import("views/home").then(m => m.default); //
const ZlActionSheet = () =>
  import("views/packages/actionsheet").then(m => m.default); //
const ZlAlert = () => import("views/packages/alert").then(m => m.default); //
const ZlAlertPlugin = () =>
  import("views/packages/alert-plugin").then(m => m.default); //
const ZlCalendar = () => import("views/packages/calendar").then(m => m.default); //
const ZlCell = () => import("views/packages/cell").then(m => m.default); //
const ZlCellGroup = () =>
  import("views/packages/cell-group").then(m => m.default); //
const ZlCheckbox = () => import("views/packages/checkbox").then(m => m.default); //
const ZlCircle = () => import("views/packages/circle").then(m => m.default); //
const ZlCol = () => import("views/packages/col").then(m => m.default); //
const ZlConfirm = () => import("views/packages/confirm").then(m => m.default); //
const ZlconfirmPlugin = () =>
  import("views/packages/confirm-plugin").then(m => m.default); //
const ZlDialog = () => import("views/packages/dialog").then(m => m.default); //
const ZlDialogPlugin = () =>
  import("views/packages/dialog-plugin").then(m => m.default); //
const ZlDivider = () => import("views/packages/divider").then(m => m.default); //
const ZlLoading = () => import("views/packages/loading").then(m => m.default); //
const ZlLoadingPlugin = () =>
  import("views/packages/loading-plugin").then(m => m.default); //
const ZlNotify = () => import("views/packages/notify").then(m => m.default); //
const ZlNotifyPlugin = () =>
  import("views/packages/notify-plugin").then(m => m.default); //
const ZlRadio = () => import("views/packages/radio").then(m => m.default); //
const ZlRange = () => import("views/packages/range").then(m => m.default); //
const ZlRow = () => import("views/packages/row").then(m => m.default); //
const ZlSlideDelete = () =>
  import("views/packages/slide-delete").then(m => m.default); //
const ZlSwitch = () => import("views/packages/switch").then(m => m.default); //
const ZlToast = () => import("views/packages/toast").then(m => m.default); //
const ZlToastPlugin = () =>
  import("views/packages/toast-plugin").then(m => m.default); //

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
        },
        {
          path: "ZlAlert",
          name: "上拉菜单",
          component: ZlAlert
        },
        {
          path: "ZlAlertPlugin",
          name: "上拉菜单",
          component: ZlAlertPlugin
        },
        {
          path: "ZlCalendar",
          name: "上拉菜单",
          component: ZlCalendar
        },
        {
          path: "ZlCell",
          name: "上拉菜单",
          component: ZlCell
        },
        {
          path: "ZlCellGroup",
          name: "上拉菜单",
          component: ZlCellGroup
        },
        {
          path: "ZlCheckbox",
          name: "上拉菜单",
          component: ZlCheckbox
        },
        {
          path: "ZlCircle",
          name: "上拉菜单",
          component: ZlCircle
        },
        {
          path: "ZlCol",
          name: "上拉菜单",
          component: ZlCol
        },
        {
          path: "ZlConfirm",
          name: "上拉菜单",
          component: ZlConfirm
        },
        {
          path: "ZlconfirmPlugin",
          name: "上拉菜单",
          component: ZlconfirmPlugin
        },
        {
          path: "ZlDialog",
          name: "上拉菜单",
          component: ZlDialog
        },
        {
          path: "ZlDialogPlugin",
          name: "上拉菜单",
          component: ZlDialogPlugin
        },
        {
          path: "ZlDivider",
          name: "上拉菜单",
          component: ZlDivider
        },
        {
          path: "ZlLoading",
          name: "上拉菜单",
          component: ZlLoading
        },
        {
          path: "ZlLoadingPlugin",
          name: "上拉菜单",
          component: ZlLoadingPlugin
        },
        {
          path: "ZlNotify",
          name: "上拉菜单",
          component: ZlNotify
        },
        {
          path: "ZlNotifyPlugin",
          name: "上拉菜单",
          component: ZlNotifyPlugin
        },
        {
          path: "ZlRadio",
          name: "上拉菜单",
          component: ZlRadio
        },
        {
          path: "ZlRange",
          name: "上拉菜单",
          component: ZlRange
        },
        {
          path: "ZlRow",
          name: "上拉菜单",
          component: ZlRow
        },
        {
          path: "ZlSlideDelete",
          name: "上拉菜单",
          component: ZlSlideDelete
        },
        {
          path: "ZlSwitch",
          name: "上拉菜单",
          component: ZlSwitch
        },
        {
          path: "ZlToast",
          name: "上拉菜单",
          component: ZlToast
        },
        {
          path: "ZlToastPlugin",
          name: "上拉菜单",
          component: ZlToastPlugin
        }
      ]
    },
    {
      path: "**",
      redirect: "/"
    }
  ]
});
