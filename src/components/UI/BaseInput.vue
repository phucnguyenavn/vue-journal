<template>
  <textarea
    :value="value"
    @input="$emit('update:value', $event.target.value)"
    class="resize-none outline-none whitespace-pre-line overflow-hidden text-sm"
    ref="textarea"
    :oninput="autoGrow"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { computed, ref } from "vue";
export default {
  props: ["placeholder", "value", "placeholder"],
  setup() {
    const textarea = ref(null);
    const textareaEle = computed(() => textarea.value);

    const autoGrow = () => {
      textareaEle.value.style.height = "5px";
      textareaEle.value.style.height = textareaEle.value.scrollHeight + "px";
    };
    return { autoGrow, textarea };
  },
};
</script>
