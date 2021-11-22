<template>
  <router-view />
</template>

<script>
import { getDB, getJournals } from "./store/db/indexedDB";
import { useStore } from "vuex";
import { computed, watch } from "vue";
import { actionTypes } from "./store/store-types";
import {journalSync}  from "./common/LocalStorage";

export default {
  setup() {
    const store = useStore();
    let actionJournalSync = computed(() => store.getters.actionJournalSync);
    watch(actionJournalSync, (newAction, oldAction) => {
      if (newAction !== oldAction) {
        if (actionJournalSync.value === "PUSH") {
          store.dispatch(actionTypes.PushJournal, {
            syncId: journalSync,
            journals: getJournals().then((res) => res),
          });
        } else if (actionJournalSync.value === "PULL") {
          store.dispatch(actionTypes.PullJournal, {
            syncId: journalSync,
          });
        }
      }
    });
    getDB();
  },
};
</script>
