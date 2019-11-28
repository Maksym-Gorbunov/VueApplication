<template>
  <div id="navbarRight">
    <!-- <span>currentUser: {{ currentUser.login }}</span> -->

    <!-- LOGGED IN -->
    <div v-if="currentUser.login != ''">
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {{ currentUser.login }} 
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="#">Profile</a></li>
            <li><a href="#">My videos</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Favorits</a></li>
            <li role="separator" class="divider"></li>
            <li><a @click="signOut">Sign Out</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- GUEST -->
    <div v-else>
      <ul class="nav navbar-nav navbar-right">
        
        <span>Guest</span>
        <button type="button" class="btn btn-default navbar-btn"> Log in </button>
        <button type="button" class="btn btn-default navbar-btn"> Sign upp </button>
      </ul>
    </div>

  </div>
</template>



<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavbarRight",
  components: {},
  props: ["temp1"],
  data() {
    return {
      temp2: "temp2 "
    };
  },
  methods: {
    ...mapActions(["signOutAction"]),
    signOut() {
      // console.log(this.currentUser)
      this.signOutAction();
    }
  },
  computed: mapGetters(["currentUser", "videos", "data"])
};
</script>



<style scoped></style>
