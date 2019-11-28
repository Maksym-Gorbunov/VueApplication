//import axios from 'axios';
import dataStore from './dataStore'
import videoStore from './videosStore'

const state = {
  videos: [
    {
      id: 1,
      title: "clip_one"
    },
    {
      id: 2,
      title: "clip_two"
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
