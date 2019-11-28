/* eslint-disable */
//import axios from 'axios';
import usersStore from './usersStore'
import videosStore from './videosStore'
/* eslint-enable */


const state = {
  temmmp: {
    id: 44
  },

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
  comments: state => state.comments
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
