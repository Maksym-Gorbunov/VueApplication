<template>
  <div id="homePage">
    
    <div class="topContainer">
      <Navbar/>
    </div>

    <button @click="test">click</button>

    <div class="mainContainer">
      <!-- <div class="leftContainer">left</div> -->
      <div class="centerContainer">
        <VideoGroup/>
      </div>
      <!-- <div class="rigthContainer">right</div> -->
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "../Navbar";
import VideoGroup from "../VideoGroup";

export default {
  name: "HomePage",
  components: { Navbar, VideoGroup },
  computed: mapGetters(["allTodos", "pages", "items", "videos"]),
  methods: {
    ...mapActions(["testAction", "signInAction"]),
  test(){
    this.testAction();
  }
  },
  created(){
    this.signInAction();
  }
};
</script>

<style scoped>
  #homePage{
    height: 100vh;
  }
  .mainContainer{
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 10px;
    background-color: #fff;
    height: 60vh;

  }
  /* .leftContainer{
    background: rgb(110, 233, 186);
  } */
  .centerContainer{
    background: #ccc;
  }
  /* .rigthContainer{
    background: rgb(155, 154, 233);
  } */
</style>
