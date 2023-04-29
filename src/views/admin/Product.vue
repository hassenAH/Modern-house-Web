<template>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-8/12 px-4">
        <CardProduct />
      </div>
      <div class="w-full lg:w-4/12 px-4">
      <CardUpload3D />
    </div>
    <div class="w-full mb-12 px-4">
      <card-table />
    </div>
    </div>
  </template>
  <script>
  import CardProduct from "@/components/Cards/CardProduct.vue";
  import CardUpload3D from "@/components/Cards/CardUpload3D.vue";
  import CardTable from "@/components/Cards/CardTable.vue";
  export default {
    components: {
        CardProduct,
        CardUpload3D,
        CardTable
    },
  };
  </script>
  