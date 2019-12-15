<template>
  <div id="player">

    <h5>player component</h5>

    <!-- <video controls autoplay name="media"> == $0 <source src="C:\Users\Maksym\Downloads\video1.mp4" type="video/mp4"></video> -->

<video controls autoplay name="media"> == $0 <source src="this.getVideoUrl(555)" type="video/mp4"></video>
<p>Current:  {{this.currentVideo.videoUrl}}</p>
<p>Current:  {{this.currentVideo.id}}</p>

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
    getVideoUrl(url){
      console.log("ooo ooo "+ url);  
    }
  },
  computed: mapGetters(["videos", "currentVideo"]),
  created() {
  }
};
</script>


<style scoped>
</style>
