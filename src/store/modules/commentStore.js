//import axios from 'axios';
import dataStore from './dataStore'
import videoStore from './videosStore'

const state = {
  comments: [
    {
      id: 1,
      text: "comment_1"
    },
    {
      id: 2,
      text: "comment_2"
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
