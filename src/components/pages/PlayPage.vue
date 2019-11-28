<template>
  <div id="homePage">
    
    <div class="topContainer">
      <Navbar/>
    </div>

    <div class="mainContainer">
      <div class="leftContainer">left</div>
      <div class="centerContainer">PLAY PAGE</div>
      <div class="rigthContainer">right</div>
    </div>

  </div>
</template>

<script>
import Navbar from "../Navbar";

export default {
  name: "PlayPage",
  components: { Navbar }
};
</script>

<style scoped>
  #homePage{
    height: 100vh;
  }
  .mainContainer{
    display: grid;
    grid-template-columns: 20% 50% 30%;
    grid-gap: 10px;
    background-color: #fff;
    height: 60vh;

  }
  .leftContainer{
    background: rgb(110, 233, 186);
  }
  .centerContainer{
    background: #ccc;
  }
  .rigthContainer{
    background: rgb(155, 154, 233);
  }
</style>
