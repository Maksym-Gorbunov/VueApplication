/* eslint-disable */
//import axios from 'axios';
import commentsStore from "./commentsStore";
import videosStore from "./videosStore";
/* eslint-enable */

const state = {
  
  currentUser: {},

  users: [
    {
      "id": 101,
      "firstName": "admin",
      "lastName": "admin",
      "email": "admin@mail.com",
      "personalId": "8273",
      "avatarImagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgV5yu32nzVGZMsFyhq1kKwSddQ7S4CGDveRoMQsQDB7RZunXw&s",
      "joinDate": null
  },
  {
    "id": 102,
    "firstName": "Nils",
    "lastName": "Karlsson",
    "email": "nils.karlsson@mail.com",
    "personalId": "24343",
    "avatarImagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7lyRlKKN6O28U-_6hZBZclEGsrPA5Jdvvz7jGWgYY2ZPetZj&s",
    "joinDate": null
},
{
  "id": 103,
  "firstName": "Kalle",
  "lastName": "Petersson",
  "email": "kalle.petersson@mail.com",
  "personalId": "23434",
  "avatarImagePath": "img_path...",
  "joinDate": null
}      



    // {
    //   namn: "User1",
    //   efternamn: "Userson",
    //   avatar:
    //     "urlhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgV5yu32nzVGZMsFyhq1kKwSddQ7S4CGDveRoMQsQDB7RZunXw&s",
    //   lösenord: "",
    //   personnummer: "",
    //   mail: "user1@mail.com",
    //   joinDate: "",
    //   uploadedVideos: [],
    //   wathedVideos: [],
    //   likedVideos: [],
    //   commentedVideos: []
    // },
    // {
    //   namn: "User2",
    //   efternamn: "Userson",
    //   avatar:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7lyRlKKN6O28U-_6hZBZclEGsrPA5Jdvvz7jGWgYY2ZPetZj&s",
    //   lösenord: "",
    //   personnummer: "",
    //   mail: "user2@mail.com",
    //   joinDate: "",
    //   uploadedVideos: [],
    //   wathedVideos: [],
    //   likedVideos: [],
    //   commentedVideos: []
    // },
    // {
    //   namn: "User3",
    //   efternamn: "Userson",
    //   avatar: "",
    //   lösenord: "",
    //   personnummer: "",
    //   mail: "user3@mail.com",
    //   joinDate: "",
    //   uploadedVideos: [],
    //   wathedVideos: [],
    //   likedVideos: [],
    //   commentedVideos: []
    // }
  ]
};

const getters = {
  currentUser: state => state.currentUser
};

const actions = {
  test111(){
    // console.log(state.users[0].mail)
    // console.log(videosStore.state.videos[0].title)
  },


  signOutAction() {
    state.currentUser = null;
  },

  signInAction(){
    state.currentUser = state.users[0];
  }
};

const mutations = {
};

export default {
  state,
  getters,
  actions,
  mutations
};
