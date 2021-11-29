<template>
   <backdrop
    v-if="isNewTaskOpen"
    @click.prevent="$emit('toggleNewTask', $event)"
  />
  <div class="input" >

  </div>
</template>

<script lang="ts">
export default {
     emits: ["toggleNewTask"],
     props: ["isNewTaskOpen"],
    setup(){

    }
}
</script>

