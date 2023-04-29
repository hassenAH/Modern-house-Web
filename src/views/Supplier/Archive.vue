<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <archive-card-table />
      </div>
      <div class="w-full mb-12 px-4">
        <archive-card-table color="dark" />
      </div>
    </div>
  </template>
  <script>
  import ArchiveCardTable from "@/components/Cards/ArchiveCardTable.vue";
  
  export default {
    components: {
        ArchiveCardTable,
    },
  };
  </script>
  