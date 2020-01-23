<template>
  <div id="modal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h3>Sign In</h3>
            </div>

            <div class="modal-body">
              <slot name="body">
                <form @submit="signIn">
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="fas fa-user"></i
                      ></span>
                    </div>
                    <input
                      v-model="username"
                      type="text"
                      class="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="fas fa-key"></i
                      ></span>
                    </div>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div class="row align-items-center remember">
                    <input type="checkbox" />Remember Me
                  </div>
                  <div class="form-group">
                    <input
                      type="button"
                      value="Cancel"
                      class="btn btn-info float-right login_btn"
                      @click="$emit('close')"
                    />
                    <input
                      type="submit"
                      value="Sign In"
                      class="btn btn-success float-right login_btn"
                    />
                  </div>
                </form>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapActions } from "vuex";
// import $ from "jquery";

export default {
  name: "LoginModal",
  components: {},
  // props: ["temp1", "loginStatus"],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["signInAction"]),

    signIn(e) {
      e.preventDefault();
      var user = {
        username: this.username,
        password: this.password
      }
      this.signInAction(user);
    }
  }
  // computed: mapGetters(["currentUser", "videos", "data"])
};
</script>

<style scoped>
.remember {
  margin-left: 0.1em;
}

.btn {
  margin-right: 1em;
  margin-top: 2em;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
