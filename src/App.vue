<template>
  <section :class="{ busy }">
    <div v-if="loading">Loading...</div>
    <TodoList v-else :todos="todos" @remove="remove" @toggle="toggle" />
    <hr />
    <input class="p6" type="text" v-model="text" />
    <button class="p6" :disabled="saving" @click="add">Add</button>
  </section>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import * as todos from "./services/todos";
export default {
  name: "App",
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [],
      loading: false,
      saving: false,
      busy: false,
      text: "",
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.loading = true;
      todos.list().then((todos) => {
        this.todos = todos;
        this.loading = false;
      });
    },
    add() {
      this.saving = true;
      const todo = { name: this.text, done: false };
      todos.add(todo).then((id) => {
        this.saving = false;
        this.todos.push({ id, ...todo });
        this.text = "";
      });
    },
    remove(todo) {
      this.busy = true;
      todos.remove(todo._id).then(() => {
        this.todos = this.todos.filter((e) => e._id !== todo._id);
        this.busy = false;
      });
    },
    toggle(todo) {
      this.busy = true;
      const { _id, done, name } = todo;
      const updated = { name, done: !done };
      delete updated._id;
      todos.update(todo._id, updated).then(() => {
        this.todos = this.todos.map((e) => {
          if (e._id === todo._id) {
            return { _id, ...updated };
          }
          return e;
        });
        this.busy = false;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
  width: 320px;
  margin: 0 auto;
}
.p6 {
  padding: 6px;
}
section.busy {
  cursor: wait;
  filter: blur(1px);
  pointer-events: none;
}
</style>
