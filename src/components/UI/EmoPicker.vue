
<template>

    <emoji-picker @click.prevent="handleClick" ref="emo" class="emo-picker mx-auto"/>
  <div>
    {{emoji}}
  </div>
</template>

<script>
import { defineComponent, ref,onMounted, onUnmounted } from 'vue'
import { Picker } from "emoji-picker-element";

export default defineComponent({

  setup(props, context) {
    const emoji = ref();
    const emo = ref();
    const picker = new Picker();
    

    const handleClick = (e) => {
      context.emit("emoClick", e.detail);
      emoji.value = e.detail.emoji.unicode;
    };
    const handleSkinChange = (e)=>{
      context.emit("skinChange", e.detail);
    }

    onMounted(() => {
      
      emo.value = picker;
      picker.addEventListener("emoji-click", handleClick);
      picker.addEventListener("skin-tone-change", handleSkinChange);
    });
    onUnmounted(()=>{
      picker.removeEventListener("emoji-click", handleClick);  
      picker.removeEventListener("skin-tone-change", handleSkinChange);
    })
    return { handleClick, handleSkinChange,emoji,emo,picker };
  },
});
</script>

<style scoped>
.emo-picker{
  width: 250px;
  height: 250px;
  --num-columns : 6;
  --emoji-size: 0.75rem;
  --input-font-size : 0.75rem;
}
</style>
