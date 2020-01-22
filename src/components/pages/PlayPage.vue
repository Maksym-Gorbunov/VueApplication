<template>
  <div id="homePage">
    <div class="topContainer">
      <Navbar />
    </div>

    <div class="mainContainer">
      <div class="leftContainer">left</div>
      <div class="centerContainer">
        PLAY PAGE

        <PlayCenter />
      </div>
      <div class="rigthContainer">right</div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar";
import PlayCenter from "../PlayCenter";

export default {
  name: "PlayPage",
  components: { Navbar, PlayCenter }
};
</script>

<style scoped>
#homePage {
  height: 100vh;
}
.mainContainer {
  display: grid;
  grid-template-columns: 20% 50% 30%;
  grid-gap: 10px;
  background-color: #fff;
  height: 60vh;
}
.leftContainer {
  background: rgb(110, 233, 186);
}
.centerContainer {
  background: #ccc;
}
.rigthContainer {
  background: rgb(155, 154, 233);
}
</style>
