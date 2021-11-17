<template>
  <router-view />
    
 
</template>

<script>

import {getDB, mockData} from "./store/db/indexedDB"

export default {

  setup() {
      getDB();
      mockData();
  },
};
</script>


