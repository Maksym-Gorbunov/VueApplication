<template>
  <div id="videoGroup" class="videoGroup">
    <div v-for="video in videos" :key="video.id">
      <VideoThumbnail v-bind:video="video" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VideoThumbnail from "./VideoThumbnail";

export default {
  name: "VideoGroup",
  components: { VideoThumbnail },
  computed: mapGetters(["videos"]),
  methods: {
    ...mapActions(["testAction"]),
    test() {
      this.testAction();
    }
  },
  created() {}
};
</script>

<style scoped>
.videoGroup {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
}
@media (max-width: 500px) {
  .videoGroup {
    grid-template-columns: 1fr;
  }
}
</style>
