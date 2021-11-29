<template>
  <div class="w-1/2 mt-4 h-screen border">
    <new-task
      :isNewTaskOpen="isNewTaskOpen"
      v-if="isNewTaskOpen"
      @toggleNewTask="toggleNewTask"
    />
    <slot name="title" />
    <div class="text-xs mt-1 opacity-70">
      <button @click.prevent="toggleNewTask">+ new task</button>
    </div>
  </div>
</template>

<script lang="ts">
import NewTask from './NewTask.vue';

export default {
  components: { NewTask },
  props: ["toggleNewTask", "isNewTaskOpen"],
  setup() {},
};
</script>
