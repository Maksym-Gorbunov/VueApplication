<template>
  <div>
    <h3>Add Todo</h3>

    <hr>
    
    <hr>
  <!-- test -->
  <!-- test -->
  <!-- test -->
  <!-- test -->
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit" value="Submit">
      </form>
    </div>


    <hr>
      <p>Title: {{this.title}}</p>
    <hr>

  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "Test",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    // ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();

      this.title = "updated"

      // this.addTodo(this.title);
    }
  },
  computed: mapGetters(["allTodos", "pages", "items", "videos"]),
};
</script>

<style scoped>

</style>
