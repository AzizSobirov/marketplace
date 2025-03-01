import Vue from "vue";
import Vuex from "vuex";

import avatar from "../assets/img/avatar.png";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      avatar: avatar,
      name: "Игрок",
      company: "Source Insensitive",
      wallet: "$ 120,000,000",
      balance: "$ 120,000,000",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
});
