<template>
  <div id="player">

    <h5>player component</h5>

    <!-- <video controls autoplay name="media"> == $0 <source src="C:\Users\Maksym\Downloads\video1.mp4" type="video/mp4"></video> -->

<video controls autoplay name="media"> == $0 <source src="http://localhost:8000/videos/Avengers.mp4" type="video/mp4"></video>
<p>Current:  {{this.currentVideo}}</p>
<p>views</p>


  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Player",
  props: ["temp"],
  methods: {
    ...mapActions([]),
  },
  computed: mapGetters(["videos", "currentVideo"]),
  created() {
  }
};
</script>


<style scoped>
</style>
