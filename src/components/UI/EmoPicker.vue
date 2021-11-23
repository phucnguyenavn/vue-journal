<template>
  <emoji-picker
    @click.prevent="handleClick"
    ref="emo"
    class="emo-picker mx-auto"
  />
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { Picker } from "emoji-picker-element";

export default {
  setup(props, context) {
    const emo = ref();
    const picker = new Picker();

    const handleClick = (e) => {
      context.emit("emoji-click", e.detail);
    };
    onMounted(() => {
      emo.value = picker;
      picker.addEventListener("emoji-click", handleClick);
    });
    onUnmounted(() => {
      picker.removeEventListener("emoji-click", handleClick);
    });
    return { handleClick, emo };
  },
};
</script>

<style scoped>
.emo-picker {
  width: 250px;
  height: 250px;
  --num-columns: 6;
  --emoji-size: 0.75rem;
  --input-font-size: 0.75rem;
}
</style>
