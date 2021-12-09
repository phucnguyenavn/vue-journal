<template>
  <backdrop
    v-if="isNewTaskOpen"
    @click.prevent="$emit('toggleNewTask', $event)"
  />
  <div v-if="isNewTaskOpen" class="input w-1/2 mx-auto h-11/12 bg-gray-100">
    <base-input
      v-model:value="taskName"
      class="bg-gray-100 min-h-20px w-11/12 border-b mx-3 my-2"
      placeholder="task name"
    />
    <base-input
      v-model:value="taskDesp"
      class="bg-gray-100 min-h-50px w-11/12 border-b mx-3"
      placeholder="task in details"
    />
    <div class="w-8 float-right mx-12">
      <base-select v-model:priority="priority" />
    </div>
    <div >

    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { addToDo } from "../../../store/db/indexedDB";
import BaseSelect from "../../UI/BaseSelect.vue";

export default {
  components: { BaseSelect },
  props: ["isNewTaskOpen", "toggleNewTask"],
  emits: ["toggleNewTask"],
  setup() {
    let taskName = ref();
    let taskDesp = ref();
    let priority = ref("P1");
    let subTask = ref([]);
    

    return {
      taskName,
      taskDesp,
      priority,
    };
  },
};
</script>
