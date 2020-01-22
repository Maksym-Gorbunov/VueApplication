import Vue from 'vue';
import Vuex from 'vuex';
import usersStore from './modules/usersStore.js';
import videosStore from './modules/videosStore.js';
import commentsStore from './modules/commentsStore.js';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    usersStore,
    videosStore,
    commentsStore
  }
});
