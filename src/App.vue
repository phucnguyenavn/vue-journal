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
      if (newAction !== oldAction) {
        if (actionJournalSync.value === "PUSH") {
          store.dispatch(actionTypes.PushJournal, {
            syncId: {
              userId: store.getters.userId,
              id: store.getters.userJournalId,
            },
            journals: getJournals().then((res) => res),
          });
        } else if (actionJournalSync.value === "PULL") {
          store.dispatch(actionTypes.PullJournal, {
            syncId: journalSync,
          });
        }
      }
    });
    const push = (e) => {
      if (isAuthenticated) {
        store.dispatch(actionTypes.PushJournal, {
          syncId: {
            userId: store.getters.userId,
            id: store.getters.userJournalId,
          },
          journals: Array.from(store.getters.modifiedJournals.values()),
        });
      }
    };
    setInterval(() => {
      push();
    }, 5 * 60 * 1000);

         window.addEventListener("beforeunload", (e) =>{
      push(e);
      e.preventDefault();
      e.returnValue = "";
    }); 
    getDB();
  },
};
</script>
