<template>
  <div id="playCenter">
    <h5>player component</h5>

    <!-- <Player userId=currentVideo.userId videoId=currentVideo.id><Player/> -->
    <!-- <Player></Player> -->

    <video controls autoplay name="media">
      == $0
      <source
        :src="
          'http://localhost:8000/streaming/' +
            currentVideo.userId +
            '/' +
            currentVideo.id
        "
        type="video/mp4"
      />
    </video>

    <p>
      <b>{{ this.currentVideo.title }}</b>
      <span class="pull-right">views: {{ this.currentVideo.views }}</span>
    </p>
    <p></p>
    <p>Description: {{ this.currentVideo.description }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import Player from './Player';

export default {
  name: "PlayCenter",
  // components: {Player},
  props: ["temp"],
  methods: {
    ...mapActions([])
  },
  computed: mapGetters(["videos", "currentVideo"]),
  created() {}
};
</script>

<style scoped>
#playCenter {
  padding: 1em;
}

video {
  width: 100%;
}
</style>
