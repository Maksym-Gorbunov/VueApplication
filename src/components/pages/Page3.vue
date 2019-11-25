<template>
  <div class="container">
    <h1>Page3</h1>

    <!-- <p> {store.$this.page} </p> -->

    <AddTodo/>
    <FilterTodos/>
    <Todos/>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Todos from "../Todos";
import AddTodo from "../AddTodo";
import FilterTodos from "../FilterTodos";


export default {
  name: "Page3",
  components: {Todos, AddTodo, FilterTodos},
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    
    
  },
  computed: mapGetters(["allTodos", "page"]),
  created() {
  }
};



</script>

<style scoped>
  body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
