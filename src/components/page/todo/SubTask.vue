<template>
  <backdrop
    v-if="isSubTaskOpen"
    @click.prevent="$emit('toggleSubTask', $event)"
  />
  <div v-if="isSubTaskOpen">

  </div>
</template>

<script>
export default {
    props : ["isSubTaskOpen"],
    emits : ["toggleSubTask"],
    setup(){
        
    }

};
</script>
