import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";


import BootstrapVue from 'bootstrap-vue'
// import store from './store'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


window.$ = require('jquery')
window.JQuery = require('jquery')


Vue.use(BootstrapVue)
Vue.config.productionTip = false

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// window.$ = require("jquery");
// window.JQuery = require("jquery");


// Vue.use(BootstrapVue)
// Vue.config.productionTip = false


const cors = require('cors')


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
