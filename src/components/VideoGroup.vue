<template>
  <div id="videoGroup">
    <h2>VideoGroup</h2>
    <div v-for="video in videos" :key="video.id">
      <VideoItem v-bind:video="video" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VideoItem from "./VideoItem";

export default {
  name: "VideoGroup",
  components: { VideoItem },
  computed: mapGetters(["videos"]),
  methods: {
    ...mapActions(["testAction"]),
  test(){
    this.testAction();
  }
  },
  created(){
  }
};
</script>

<style scoped>

</style>
