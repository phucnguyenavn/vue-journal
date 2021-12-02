<template>
  <form
    class="w-96 mt-2 ring-2 ring-red-200 rounded-md bg-gray-100"
    @submit.prevent="submitTask" 
  >
    <base-input
      v-model:value="taskName"
      class="bg-gray-100 mt-2 border-b border-red-100 min-h-25px"
      placeholder="task name"
    />
    <base-input
      v-model:value="taskDesp"
      class="bg-gray-100 mt-1 min-h-100px"
      placeholder="task in details"
    />
    <div class="flex flex-row py-1">
      <div class="px-4 w-80">
        <button type="submit" class="bg-red-500 text-white rounded-md px-1">
          Add
        </button>
      </div>
      <div class="w-8">
        <select
          v-model="priority"
          class="appearance-none outline-none px-2 rounded-md text-white"
          @change="switchColor($event.target.selectedIndex)"
          :class="bgSelected"
        >
          <option class="bg-red-500" value="P4">p4</option>
          <option class="bg-amber-500" value="P3">p3</option>
          <option class="bg-green-500" value="P2">p2</option>
          <option class="bg-gray-500" value="P1">p1</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { ref } from "vue";
import { addToDo } from "../../../store/db/indexedDB";

export default {
  setup() {
    let taskName = ref();
    let taskDesp = ref();
    let priority = ref("P1");
    let bgSelected = ref("bg-gray-500");
    const submitTask = async (e) => {   
      const todo = {
        name : taskName.value,
        description : taskDesp.value,
        isDone : false,
        priority : priority.value,
        subTask : []
      }      
      await addToDo(todo);
      e.target.reset();
     

    };
    const switchColor = (selectedIndex : Number) => {
      if (selectedIndex === 0) {
        bgSelected.value = "bg-red-500";
      } else if (selectedIndex === 1) {
        bgSelected.value = "bg-amber-500";
      } else if (selectedIndex === 2) {
        bgSelected.value = "bg-green-500";
      } else bgSelected.value = "bg-gray-500";
    };

    return {
      taskName,
      taskDesp,
      priority,
      submitTask,
      switchColor,
      bgSelected,
    };
  },
};
</script>
