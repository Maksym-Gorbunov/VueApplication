<template>
  <div class="container">
    <h1>Page3</h1>

    <Test/>

    <div>Videos: {{videos}}</div>


    <hr>

      <div> {{pages[0].name}} </div>
      <!-- <div v-for="page in pages" :key="page.id"> {{page[0].id}} </div> -->

    <hr>
    <div class="pages">
      <div class="page" v-for="page in pages" :key="page.id">
        {{page.name}}
      </div>
    </div>
    <hr>


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
import Test from "../Test";


export default {
  name: "Page3",
  components: {Todos, AddTodo, FilterTodos, Test},
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    
    
  },
computed: mapGetters(["allTodos", "pages", "items", "videos"]),
  created() {
    this.pages[0].name = "nnnnn"
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
