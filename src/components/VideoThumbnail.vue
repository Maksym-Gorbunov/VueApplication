<template>
  <div id="videoItem" class="videoItem" @click="openVideo(video)">
    <!-- <img :src="video.imageUrl" alt="image"> -->
    <img
      :src="getImageUrl(video.id)"
      onerror="this.onerror=null; this.src='http://maxcoder.pro/img/temp/default.png'"
      alt=""
    />
    <p><b>title: </b> {{ video.title }}</p>
    <p><b>description: </b> {{ video.description.substring(0, 40) }} ...</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "VideoThumbnail",
  props: ["video"],
  data() {
    return {
      // temp: this.dice.value
    };
  },
  methods: {
    ...mapActions(["setCurrentVideo"]),

    openVideo(clickedVideo) {
      this.setCurrentVideo(clickedVideo);

      this.$router.push({ name: "playPage" });
    },
    getImageUrl(id) {
      if (id === "") {
        return "http://maxcoder.pro/img/temp/default.png";
      }
      return "http://maxcoder.pro/img/temp/" + id + ".jpg";
    }
  },
  computed: mapGetters(["videos", "currentVideo"]),
  created() {}
};
</script>

<style scoped>
.videoItem {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  /* text-align: center; */
  position: relative;
  cursor: pointer;
}

img {
  height: 10em;
}

/* .todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
} */
</style>
