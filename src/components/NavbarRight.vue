<template>
  <div id="navbarRight">
   
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
    <LoginModal v-if="showLoginModal" @close="showLoginModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </LoginModal>

    <!-- LOGGED IN -->
    <div v-if="currentUser != null && currentUser.email != ''">
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ currentUser.email }}
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
        <button type="button" class="btn btn-default navbar-btn" @click="showLoginModal = true">
          Log in
        </button>
        <button type="button" class="btn btn-default navbar-btn">
          Sign upp
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
import LoginModal from "./LoginModal";

export default {
  name: "NavbarRight",
  components: {LoginModal},
  props: ["temp1", "loginStatus"],
  data() {
    return {
      temp2: "temp2 ",
      showLoginModal:false
    };
  },
  methods: {
    ...mapActions(["signOutAction"]),

    login() {
      console.log("login");
      // $("#my-modal").modal({
      //   show: "true"
      // });

      $('#navbarRight').css('opacity', '0.6');

      // $("#myModal").modal("show");
    },

    signOut() {
      this.signOutAction();
    }
  },
  computed: mapGetters(["currentUser", "videos", "data"])
};
</script>

<style scoped></style>
