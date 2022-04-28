<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo._id"
      :todo="todo"
      @toggle="$emit('toggle', todo)"
      @remove="$emit('remove', todo)"
    />
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.todo-list {
  padding: 32px 0;
}
</style>