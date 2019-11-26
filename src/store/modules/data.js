//import axios from 'axios';

const state = {

  currentUser: {
    id: 555,
    login: "Iths"
  },
  
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
  videos: state => state.videos,
  currentUser: state => state.currentUser
};

const actions = {
    signOutAction(){

    state.currentUser.id = null;
    state.currentUser.login = '';
    
    
  }
};

const mutations = {
  // signOut: () => {
  //   this.currentUser.id = null;
  //   this.currentUser.login = "";
    
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
