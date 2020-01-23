/* eslint-disable */
import commentsStore from "./commentsStore";
import videosStore from "./videosStore";
import axios from "axios";
/* eslint-enable */

const state = {
  accessToken: "",

  currentUser: {},

  users: []
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

  async signInAction({ commit }, user) {
    if (user != null) {
      await axios
        .post("http://localhost:7000/api/signin", {
          username: user.username,
          password: user.password
        })
        .then(jwtResponse => {
            axios.get(
            "http://localhost:7000/api/video-data/users/email/" + user.username,
            {
              headers: {
                "Authorization": jwtResponse.data.accessToken
                // "Access-Control-Allow-Origin": "*",
                // "Authorization": "Bearer " + jwtResponse.data.accessToken
              }
            }
          ).then((userResponse)=>{
            state.currentUser = userResponse.data
            state.accessToken = jwtResponse.data.accessToken
            console.log(state.currentUser)  
            console.log(state.accessToken)  
          });

        });


        
        // commit("signInMutation", data);
    }
  }
};

const mutations = {
  // signInMutation: (state, data) => {
  //   if (data.accessToken != null && data.accessToken != "") {
  //     state.accessToken = data.accessToken;
  //     console.log("JWT Token: " + state.accessToken);
  //   }
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
