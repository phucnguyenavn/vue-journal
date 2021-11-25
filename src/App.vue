<template>
  <router-view />
</template>

<script>
import { getDB, getJournals } from "./store/db/indexedDB";
import { useStore } from "vuex";
import { computed, watch } from "vue";
import { actionTypes } from "./store/store-types";

import { isAuthenticated } from "./router";

export default {
  setup() {
    const store = useStore();
    let actionJournalSync = computed(() => store.getters.actionJournalSync);

    watch(actionJournalSync, (newAction, oldAction) => {
      console.log(newAction);
      if (newAction !== oldAction) {
        const syncId = {
          userId: store.getters.userId,
          id: store.getters.userJournalId,
        };
        console.log(syncId);
        if (actionJournalSync.value === "PUSH") {
           store.dispatch(actionTypes.PushJournal, {
            syncId: syncId,
            journals: getJournals().then((res) => res),         
          });
        } else if (actionJournalSync.value === "PULL") {
          store.dispatch(actionTypes.PullJournal, {
            syncId: journalSync,
          });
        }
      }
    });
    const push = async () => {
      if (isAuthenticated) {
        const syncId = {
          userId: store.getters.userId,
          id: store.getters.userJournalId,
        };
        await store.dispatch(actionTypes.PushJournal, {
          syncId: syncId,
          journals: store.getters.modifiedJournals.values(),
        });
      }
    };
    setInterval(() => {
      push();
    }, 5 * 60 * 1000);

    getDB();
  },
};
</script>
