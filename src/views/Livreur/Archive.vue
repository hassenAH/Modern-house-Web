<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <livred-card-table />
      </div>
      <div class="w-full mb-12 px-4">
        <livred-card-table color="dark" />
      </div>
    </div>
  </template>
  <script>
  import LivredCardTable from "@/components/Cards/CardTableLivred.vue";
  
  export default {
    components: {
      LivredCardTable,
    },
  };
  </script>
  