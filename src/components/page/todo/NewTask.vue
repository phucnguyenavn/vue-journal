<template>
  <div class="w-96 border">
    <form @click.prevent="submitTask" class="">
      <div class="name w-full bg-gray-50 outline-none resize-none overflow-hidden h-auto" contenteditable="true" placeholder="task name">

      </div>
      <div>
        <input class="w-full bg-gray-50 outline-none" placeholder="task desp" />
      </div>
      <div>
        <select></select>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  setup() {},
};
</script>
