<template>
  <select
    :priority="priority"
    class="appearance-none outline-none px-2 rounded-md text-white"
    @change="switchColor($event.target.selectedIndex)"
    :class="bgSelected"
  >
    <option class="bg-red-500" value="P4">p4</option>
    <option class="bg-amber-500" value="P3">p3</option>
    <option class="bg-green-500" value="P2">p2</option>
    <option class="bg-gray-500" value="P1">p1</option>
  </select>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: ["priority"],
  setup() {
    let bgSelected = ref("bg-gray-500");

    const switchColor = (selectedIndex: Number) => {
      if (selectedIndex === 0) {
        bgSelected.value = "bg-red-500";
      } else if (selectedIndex === 1) {
        bgSelected.value = "bg-amber-500";
      } else if (selectedIndex === 2) {
        bgSelected.value = "bg-green-500";
      } else bgSelected.value = "bg-gray-500";
    };
    return { bgSelected, switchColor };
  },
};
</script>

<style></style>
