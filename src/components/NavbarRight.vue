<template>
  <div id="navbarRight">
    <!-- Modal -->
    <div
      id="myModal"
      class="modal hide fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-header">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-hidden="true"
        >
          ×
        </button>
        <h3 id="myModalLabel">Modal header</h3>
      </div>
      <div class="modal-body">
        <p>One fine body…</p>
      </div>
      <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">
          Close
        </button>
        <button class="btn btn-primary">Save changes</button>
      </div>
    </div>

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
        <button type="button" class="btn btn-default navbar-btn" @click="login">
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

export default {
  name: "NavbarRight",
  components: {},
  props: ["temp1", "loginStatus"],
  data() {
    return {
      temp2: "temp2 "
    };
  },
  methods: {
    ...mapActions(["signOutAction"]),

    login() {
      console.log("login");
      $("#myModal").modal("show");
    },

    signOut() {
      this.signOutAction();
    }
  },
  computed: mapGetters(["currentUser", "videos", "data"])
};
</script>

<style scoped></style>
