import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

window.$ = require("jquery");
window.JQuery = require("jquery");

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
