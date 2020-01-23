/* eslint-disable */
import commentsStore from "./commentsStore";
import videosStore from "./videosStore";
import axios from "axios";
/* eslint-enable */

const state = {

  accessToken: {},

  currentUser: {},

  users: [
    {
      id: 101,
      firstName: "admin",
      lastName: "admin",
      email: "admin@mail.com",
      personalId: "8273",
      avatarImagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgV5yu32nzVGZMsFyhq1kKwSddQ7S4CGDveRoMQsQDB7RZunXw&s",
      joinDate: null
    },
    {
      id: 102,
      firstName: "Nils",
      lastName: "Karlsson",
      email: "nils.karlsson@mail.com",
      personalId: "24343",
      avatarImagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7lyRlKKN6O28U-_6hZBZclEGsrPA5Jdvvz7jGWgYY2ZPetZj&s",
      joinDate: null
    },
    {
      id: 103,
      firstName: "Kalle",
      lastName: "Petersson",
      email: "kalle.petersson@mail.com",
      personalId: "23434",
      avatarImagePath: "img_path...",
      joinDate: null
    }
  ]
};

const getters = {
  currentUser: state => state.currentUser
};

const actions = {
  test111() {
    // console.log(state.users[0].mail)
  },

  signOutAction() {
    state.currentUser = null;
  },

  async signInAction({commit}, user) {
    if(user!=null){
      
      
      const response = await axios.post(
        'http://localhost:7000/api/signin',
        { 
          username: user.username,
          password: user.password
        }
        );
        
        commit('signInMutation', response.data);
      }  
  }
};

const mutations = {
  
  signInMutation: (state, data) => {
    if(data.accessToken!=null && data.accessToken!=""){
      state.accessToken = data.accessToken
      console.log("JWT Token: "+ state.accessToken)
      
    
    }
  }


};



export default {
  state,
  getters,
  actions,
  mutations
};
