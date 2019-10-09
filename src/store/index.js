import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";

// 分模块缓存变量
import menu from "./modules/menu";
import mavonEditor from "./modules/mavon-editor";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 全局变量
  modules: {
    //单独模块
    menu,
    mavonEditor
  },
  state,
  getters,
  mutations,
  actions
});

export default store;
