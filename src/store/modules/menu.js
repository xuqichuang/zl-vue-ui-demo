import * as components from "zl-vue-ui";
let menus = [];
Object.keys(components).forEach(item => {
  if (!menus.some(list => list.name == item)) {
    menus.push({
      name: item
    });
  }
});
const menu = {
  state: {
    menus
  },
  mutations: {},
  actions: {}
};

export default menu;
