/* eslint-disable */
import axios from "axios";
import usersStore from "./usersStore";
import commentsStore from "./commentsStore";
/* eslint-enable */

const state = {
  currentVideo: {},

  videos: []
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
