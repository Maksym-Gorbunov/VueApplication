import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos.js';
import dataStore from './modules/dataStore.js';
import videoStore from './modules/videoStore.js';
import commentStore from './modules/commentStore.js';


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
    dataStore,
    videoStore,
    commentStore
  }
});
