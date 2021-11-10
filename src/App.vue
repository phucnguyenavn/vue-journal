<template>
  <router-view />
    
 
</template>

<script>

import indexedDB from "./store/db/indexedDB";


export default {

  setup() {
    indexedDB.getDb();
  },
};
</script>


