/* eslint-disable */
//import axios from 'axios';
import commentStore from './commentStore'
import videoStore from './videoStore'
/* eslint-enable */


const state = {

  currentUser: {
    id: 4,
    login: "Homer"
  }
};

const getters = {
  currentUser: state => state.currentUser
};

const actions = {
    testAction(){
      console.log("testAction: "+ state.videos[0].title)  
    }
};

const mutations = {
  // signOut: () => {
  //   this.currentUser.id = null;
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
