<template>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-8/12 px-4">
        <CardPromo />
      </div>
      <div class="w-full lg:w-4/12 px-4">
      <CardUpload3D />
    </div>
    <div class="w-full mb-12 px-4">
      <CardTable />
    </div>
    </div>
  </template>
  <script>
 
  import CardUpload3D from "@/components/Cards/CardUpload3D.vue";
  import CardTable from"@/components/Cards/CardTablePromo.vue";
  import CardPromo from "@/components/Cards/CardPromo.vue";
  export default {
    components: {
        CardTable,
        CardUpload3D,
        CardPromo
    },
  };
  </script>
  