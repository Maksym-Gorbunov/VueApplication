import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos.js';
import usersStore from './modules/usersStore.js';
import videosStore from './modules/videosStore.js';
import commentsStore from './modules/commentsStore.js';


import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)


// import items from './modules/items';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  // strict: true,
  modules: {
    todos,
    usersStore,
    videosStore,
    commentsStore
  }
});
