/* eslint-disable */
import axios from "axios";
import usersStore from "./usersStore";
import commentsStore from "./commentsStore";
/* eslint-enable */

const state = {
  currentVideo: {
    id: 44
  },

  videos: [
    // {
    //   id: 1,
    //   title: "Elephant",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae quam vitae lorem facilisis vehicula. Suspendisse ipsum elit, dignissim non nisi eget, congue imperdiet mauris. Vestibulum eleifend eget enim sed molestie. Morbi dignissim erat imperdiet, ultricies urna eget, posuere libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    //   screenshotUrl: "http://maxcoder.pro/img/temp/1.jpg",
    //   views: 667,
    //   category: "",
    //   length: "45:27",
    //   userId:1
    // },
    // {
    //   id: 2,
    //   title: "Wolf",
    //   videoUrl: "http://localhost:8000/streaming/wolf.mp4",
    //   description: "Pellentesque suscipit, odio a posuere rhoncus, nulla turpis accumsan orci, ut semper tellus lectus sed nibh. Fusce blandit enim quis nisl viverra, ac sagittis odio porta. Proin urna odio, euismod at ornare sed, efficitur quis tortor. Maecenas congue nibh elit, nec rutrum neque condimentum id. Maecenas imperdiet arcu vitae orci dapibus, sit amet vulputate eros laoreet. Curabitur elementum cursus massa ut ullamcorper",
    //   screenshotUrl: "http://maxcoder.pro/img/temp/2.jpg",
    //   views: 7,
    //   category: "History",
    //   length: "45:27",
    //   userId:1
    //   //antal likes
    // },
    // {
    //   id: 3,
    //   title: "Monkey",
    //   videoUrl: "http://localhost:8000/streaming/monkey.mp4",
    //   description: "Nulla sagittis urna sit amet nunc euismod elementum. Vestibulum molestie nisl ut lacinia aliquam. Cras at iaculis ex, sit amet faucibus libero. Aliquam nec eros interdum, eleifend felis et, lacinia elit. Aenean ut metus tellus. Sed aliquam sem vestibulum, finibus justo vitae, vulputate diam. Pellentesque varius blandit urna eget consequat. Sed sed odio aliquet, congue est et, venenatis ante.",
    //   screenshotUrl: "http://maxcoder.pro/img/temp/3.jpg",
    //   views: 12,
    //   category: "Science",
    //   length: "45:27",
    //   userId:1
    //   //antal likes
    // },
    // {
    //   id: 4,
    //   title: "Tiger",
    //   videoUrl: "http://localhost:8000/streaming/tiger.mp4",
    //   description: "Vivamus non tellus erat. Suspendisse dictum condimentum dolor. Proin hendrerit quam tempus, tempus ex sed, accumsan risus. Vivamus sed velit enim. Fusce gravida vulputate turpis quis viverra. In eu est lorem. Phasellus tincidunt imperdiet commodo. Sed eget semper nibh. Phasellus at posuere nisl. Vestibulum posuere aliquam diam vitae mollis. Vestibulum vel leo libero. Sed nibh nunc, cursus nec dolor nec, facilisis commodo orci. Ut eget lectus augue. Nullam ut magna leo.",
    //   screenshotUrl: "http://maxcoder.pro/img/temp/4.jpg",
    //   views: 22,
    //   category: "Music",
    //   length: "45:27",
    //   userId:2
    //   //antal likes
    // },
    // {
    //   id: 5,
    //   title: "Mouse",
    //   videoUrl: "http://localhost:8000/streaming/mouse.mp4",
    //   description: "Curabitur vel diam in dui dictum bibendum. In ut tellus venenatis, fringilla nunc non, congue nunc. Suspendisse quis nisl ullamcorper, posuere augue in, tincidunt orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce mollis turpis quis pellentesque consequat.",
    //   screenshotUrl: "",
    //   views: 4,
    //   category: "Sport",
    //   length: "45:27",
    //   userId:2
    //   //antal likes
    // },
    // {
    //   id: 6,
    //   title: "Shark",
    //   videoUrl: "http://localhost:8000/streaming/shark.mp4",
    //   description: "Donec euismod sapien auctor tortor mattis, sed egestas purus commodo. Ut vestibulum nisl tempus eleifend accumsan. Donec eget ligula nisl. Donec non varius turpis. Nullam est tortor, auctor ac bibendum in, congue non ante.",
    //   screenshotUrl: "http://maxcoder.pro/img/temp/6.jpg",
    //   views: 8,
    //   category: "Sport",
    //   length: "45:27",
    //   userId:3
    // }
  ]
};

const getters = {
  videos: state => state.videos,
  currentVideo: state => state.currentVideo
};

const actions = {
  setCurrentVideo({ commit }, video) {
    console.log("<<<<<<<<<<<<<<<<   << " + video.title);
    commit("setCurrentVideo", video);
  },

  async getAllVideos({ commit }) {
    const response = await axios.get("http://localhost:8000/videos");
    commit("setVideos", response.data);
  }
};

const mutations = {
  setVideos: (state, data) => (state.videos = data),

  setCurrentVideo(state, data) {
    state.currentVideo = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
