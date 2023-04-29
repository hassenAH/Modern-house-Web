
<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <delevary-card-table />
      </div>
      <div class="w-full mb-12 px-4">
        <delevary-card-table color="dark" />
      </div>
    </div>
  </template>
  <script>
  import DelevaryCardTable from "@/components/Cards/CardTableLivreur.vue";
  
  export default {
    components: {
        DelevaryCardTable,
    },
  };
  </script>
  