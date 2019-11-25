//import axios from 'axios';

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
