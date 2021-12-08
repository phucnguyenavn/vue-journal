<template>
  <sub-task
    v-if="isSubTaskOpen"
    :isSubTaskOpen="isSubTaskOpen"
    @toggleSubTask="$emit('toggleSubTask',$event)"
  />
  <div class="mt-2 cursor-pointer flex">
    <div
      class="rounded-xl h-5 w-5 border-2 shadow-lg"
      @click="switchChecked"
      :class="{ 'bg-red-500 border-gray-300': isDone }"
    >
      <div v-if="isDone" class="align-middle px-1 mt-0.5 text-white text-xs">
        &#10003;
      </div>
    </div>
    <div class="mx-3" :class="{ 'line-through': isDone }">
      <router-link
        :to="{ name: 'subtask', params: { clientId: task.clientId } }"
        @click.prevent="$emit('toggleSubTask', $event)"
        >{{ task.name }}</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import SubTask from "./SubTask.vue";

export default {
  components: { SubTask },
  props: ["task", "isSubTaskOpen", "toggleSubTask"],
  emits : ["toggleSubTask"],
  setup() {
    let isDone = ref(false);

    const switchChecked = () => {
      isDone.value = !isDone.value;
    };

    return { isDone, switchChecked };
  },
};
</script>
