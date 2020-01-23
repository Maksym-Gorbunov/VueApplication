<template>
  <div class="video-player">
    <video id="video" width="640" controls autoplay></video>
  </div>
</template>

<script>
import shaka from 'shaka-player/dist/shaka-player.ui';

export default {
  data() {
    return {
      domain: process.env.VUE_APP_DOMAIN
    }
  },
  props: {
    userId: String,
    videoId: String
  },
  mounted() {
    this.initApp();
  },
  methods: {
    initApp() {
      shaka.polyfill.installAll();

      if (shaka.Player.isBrowserSupported()) {
        this.initPlayer();
      } else {
        console.error('Browser not supported!');
      }
    },

    initPlayer() {
      var video = document.getElementById('video');
      var player = new shaka.Player(video);

      window.player = player;

      player.addEventListener('error', this.onErrorEvent);

      player
        .load(`${this.domain}/${this.userId}/${this.videoId}/${this.videoId}.mpd`)
        .then(function() {
          console.log('The video has now been loaded!');
        })
        .catch(this.onError);
    },

    onErrorEvent(event) {
      this.onError(event.detail);
    },

    onError(error) {
      console.error('Error code', error.code, 'object', error);
    }
  }
};
</script>

<style scoped>

</style>
