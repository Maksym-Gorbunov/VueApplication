/* eslint-disable */
//import axios from 'axios';
import dataStore from './dataStore'
import commentStore from './commentStore'
/* eslint-enable */


const state = {
  videos: [
    {
      id: 1,
      title: "video_1"
    },
    {
      id: 2,
      title: "video_2"
    }
  ]
};

const getters = {
  videos: state => state.videos
};

const actions = {
  
};

const mutations = {
  
};

export default {
  state,
  getters,
  actions,
  mutations
};
