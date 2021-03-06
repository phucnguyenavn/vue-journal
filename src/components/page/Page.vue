<template>
  <backdrop
    v-if="isPageOpen"
    @click.prevent="$emit('togglePageOpen', $event)"
  />
  <div v-if="isPageOpen" class="input">
    <div v-if="!isLoading">
      <div class="w-3/4 mx-auto border-b pb-1">
        <div class="mx-auto w-1/3 mt-3">
          <select
            v-model="mood"
            class="overflow-hidden h-7 text-center outline-none"
            multiple
          >
            <option class="ratings bg-1" value="HORRIBLE"></option>
            <option class="ratings bg-2" value="BAD"></option>
            <option class="ratings bg-3" value="OK"></option>
            <option class="ratings bg-4" value="GOOD"></option>
            <option class="ratings bg-5" value="AWESOME"></option>
          </select>
        </div>
      </div>

      <div class="w-3/4 mx-auto pt-2">
        <button @click.prevent="toggleEmojiTable">
          <div v-if="emoji">
            {{ emoji }}
          </div>
          <div v-else class="opacity-50 text-xs border-b-2">emoji</div>
        </button>
        <emo-picker
          class="bottom-40 right-88 fixed z-30"
          v-on:emoji-click="onClickEmoPicker"
          v-if="isEmojiOpen"
        />
        <base-input
          class="font-medium border-b-2 w-full"
          placeholder="How is your day in a nutshell ?"
          v-model:value="title"
        ></base-input>
        <base-input
          class="pt-2 w-full"
          placeholder="Tell me in details"
          v-model:value="content"
        ></base-input>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import EmoPicker from "../UI/EmoPicker.vue";
import { addJournal } from "../../store/db/indexedDB";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { getJournal } from "../../store/db/indexedDB";
import { mutationTypes } from "../../store/store-types";

export default {
  components: { EmoPicker },
  emits: ["togglePageOpen"],
  props: ["isPageOpen"],
  setup() {
    const store = useStore();
    const route = useRoute();
    let emoji = ref();
    let mood = ref([]);
    let isEmojiOpen = ref(false);
    let content = ref();
    let title = ref();
    let created = computed(() => route.params.created);
    let isLoading = computed(() => store.getters.isLoading);

    const onClickEmoPicker = (value) => {
      if (value.detail) {
        emoji.value = value.detail.unicode;
        toggleEmojiTable();
      }
    };
    const toggleEmojiTable = () => {
      isEmojiOpen.value = !isEmojiOpen.value;
    };
    const fillJournal = async () => {
      store.commit(mutationTypes.IsLoading, true);
      await getJournal(created.value)
        .then((res) => {
          if (res) {
            content.value = res.content || "";
            mood.value[0] = res.mood;
            emoji.value = res.emoji;
            title.value = res.title;
          }
        })
        .finally(() => store.commit(mutationTypes.IsLoading, false));
    };

    watch([content, title, emoji, mood], (newValue, oldValue) => {
      if (newValue !== oldValue) {
        let journal = {
          title: title.value,
          content: content.value,
          emoji: emoji.value,
          created: created.value,
          mood: mood.value[0],
        };
        addJournal(journal);
        store.commit(mutationTypes.AppendModifiedJournals, journal);
      }
    });

    watch(created, (newValue, oldValue) => {
      if (newValue !== oldValue) fillJournal();
    });

    return {
      emoji,
      onClickEmoPicker,
      mood,
      isEmojiOpen,
      toggleEmojiTable,
      content,
      title,
      isLoading,
    };
  },
};
</script>
