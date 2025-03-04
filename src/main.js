import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import "./assets/scss/app.scss";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
