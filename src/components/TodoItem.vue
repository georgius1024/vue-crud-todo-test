<template>
  <div class="todo-item">
    <input type="checkbox" :checked="todo.done" @click="$emit('toggle')"/>
    {{todo.name}}
    <span class="float-right" @click="$emit('remove')">&times;</span>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.todo-item {
  border: 1px solid #ccc;
  margin: 12px 0;
  padding: 8px;
  text-align: left;
}
.float-right {
  float: right;
  cursor: pointer;
}

</style>