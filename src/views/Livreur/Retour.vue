<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <retour-card-table />
      </div>
      <div class="w-full mb-12 px-4">
        <retour-card-table color="dark" />
      </div>
    </div>
  </template>
  <script>
  import RetourCardTable from "@/components/Cards/CardTableRetour.vue";
  
  export default {
    components: {
        RetourCardTable,
    },
  };
  </script>
  