<template>
  <emo-picker
  v-on:emoji-click="onClickEmoPicker"
  />
</template>

<script>
import { ref } from '@vue/reactivity'
import EmoPicker from '../UI/EmoPicker.vue';


export default {
  components: { EmoPicker },
  
  setup(){
      let emoji = ref();
      const onClickEmoPicker = (value) =>{
        emoji.value = value.detail.unicode;
        console.log(emoji.value);
      }
      
      return {emoji,onClickEmoPicker};
  }

}
</script>

<style>

</style>