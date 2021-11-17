<template>
  <page
    :isPageOpen="isPageOpen"
    @togglePageOpen="togglePageOpen"
    v-if="isPageOpen"
  />
  <div
    class="mt-6"
    :class="{ 'w-3/4 ml-40 ': isOpen, 'w-10/12 mx-auto': !isOpen }"
  >
    <div class="text-lg font-bold">Journal</div>
    <div class="mt-6 text-xs">
      <div class="border-b flex pb-1">
        <datepicker
          placeholder="Date Picker"
          class="
            cursor-pointer
            outline-none
            rounded-md
            bg-gray-50
            w-16
            border
            bg-gray-100
          "
          v-model="dateSelected"
          minimumView="month"
          inputFormat="MM/yyyy"
          :upperLimit="new Date()"
          clearable
        />
        <div
          class="
            ml-auto
            order-2
            rounded-sm
            text-white
            font-medium
            bg-amber-300
            ring-2 ring-amber-500
            px-1
          "
        >
          <router-link
            class=""
            :to="{ name: 'page', params: { date: today } }"
            @click.prevent="togglePageOpen"
            >New</router-link
          >
        </div>
      </div>

      <div v-if="!isLoading">
        <spinner v-if="isLoading" />
        <router-link
          v-for="journal in journals"
          :key="journal"
          :to="{ name: 'page', params: { date: journal.date } }"
          @click.prevent="togglePageOpen"
        >
          <div class="grid grid-cols-3 border-b pt-2 hover:bg-gray-200">
            <div class="col-end-1">{{ journal.emoji }}</div>
            <div class="col-start-1 col-end-6 break-words">
              {{ journal.title }}
            </div>
            <div class="col-start-7 col-end-10">{{ journal.date }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vue3-datepicker";
import Page from "./Page.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { getJournals } from "../../store/db/indexedDB";
import { mutationTypes } from "../../store/store-types";

export default {
  components: { Page, Datepicker },
  props: ["isOpen"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const today = computed(() => store.getters.today);
    let isLoading = computed(() => store.getters.isLoading);
    const journals = ref();
    const getJ = async () => {
      store.commit(mutationTypes.IsLoading, true);
      return await getJournals()
        .then((res) => {
          journals.value = res.filter((ele) => filterJournal(ele));
        })
        .finally(store.commit(mutationTypes.IsLoading, false));
    };

    let isPageOpen = ref(false);
    let dateSelected = ref(new Date());
    const togglePageOpen = () => {
      isPageOpen.value = !isPageOpen.value;
      if (!isPageOpen.value) {
        router.push({ name: "journal" });
      }
    };
    const filterJournal = (ele) => {
      let date = new Date(ele.date);
      if (dateSelected.value !== null)
        return (
          date.getMonth() === dateSelected.value.getMonth() &&
          date.getFullYear() === dateSelected.value.getFullYear()
        );
    };
    watch([isPageOpen, dateSelected], () => {
      getJ();
    });
    getJ();
    return {
      isPageOpen,
      togglePageOpen,
      dateSelected,
      today,
      journals,
      isLoading,
    };
  },
};
</script>
