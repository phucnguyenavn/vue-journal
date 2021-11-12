<template>
  <backdrop v-if="isPageOpen" @click.prevent="$emit('togglePageOpen',$event)"/>
  <div
    v-if="isPageOpen"
    class="
      fixed
      w-3/4
      mx-auto
      inset-x-0
      h-5/6
      top-12
      z-20
      bg-white
      overflow-y-auto
    "
  >
    <div class="w-3/4 mx-auto border-b pb-1">
      <div class="mx-auto w-1/3 mt-3">
        <select
          v-model="selected"
          class="overflow-hidden h-7 text-center outline-none"
          multiple
        >
          <option class="ratings bg-1" value="1"></option>
          <option class="ratings bg-2" value="2"></option>
          <option class="ratings bg-3" value="3"></option>
          <option class="ratings bg-4" value="4"></option>
          <option class="ratings bg-5" value="5"></option>
        </select>
      </div>
    </div>

    <div class="w-3/4 mx-auto pt-2">
      <button @click.prevent="toggleEmojiTable">
        <div v-if="emoji">
          {{ emoji }}
        </div>
        <div v-else class="opacity-50 text-xs border-b-2">emoji...</div>
      </button>
      <emo-picker
        class="bottom-20 right-40 relative"
        v-on:emoji-click="onClickEmoPicker"
        v-if="isEmojiOpen"
      />
      <div
        @input="titleInput"
        class="tilteDiv outline-none font-medium border-b-2"
        contenteditable="true"
        placeholder="How is your day in a nutshell ?"
      >
        {{ title }}
      </div>
      <div class="pt-2">
        <ckeditor
          :editor="editor"
          v-model="content"
          :config="editorConfig"
        ></ckeditor>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import EmoPicker from "../UI/EmoPicker.vue";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

export default {
  components: { EmoPicker },
  emits : ["togglePageOpen"],
  props: ["isPageOpen"],
  setup() {
    let emoji = ref();
    let selected = ref([]);
    let isEmojiOpen = ref(false);
    let content = ref();
    let title = ref();
    let editorConfig = {
      placeholder: "Tell me in details",
      toolbar: { items: [] },
    };
    const onClickEmoPicker = (value) => {
      emoji.value = value.detail.unicode;
      toggleEmojiTable();
      console.log(emoji.value);
    };
    const toggleEmojiTable = () => {
      isEmojiOpen.value = !isEmojiOpen.value;
    };
    const titleInput = (e) => {
      title.value = e.target.innerText;
    };

    watch(selected, (newSelected, OldSelected) => {
      console.log(newSelected);
    });
    /*    watch(content, (newSelected, OldSelected) => {
      console.log(newSelected);
    }); */

    return {
      emoji,
      onClickEmoPicker,
      selected,
      isEmojiOpen,
      toggleEmojiTable,
      content,
      titleInput,
      title,
      editor: BalloonEditor,
      editorConfig,
    };
  },
};
</script>

<style scoped>
.tilteDiv[contentEditable="true"]:empty:not(:focus):before {
  content: attr(placeholder);
  opacity: 50%;
}
.ck-focused { 
  border: none !important;
}
:focus {
  outline: 0 !important;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
}
</style>
