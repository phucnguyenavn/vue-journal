<template>
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
      {{task.name}}
    </div>
    
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";


export default {
  props : ["task"],
  setup() {
    let isDone = ref(false);
    
    const switchChecked = () => {
      isDone.value = !isDone.value;
    };
  
    
    return { isDone, switchChecked };
  },
};
</script>

