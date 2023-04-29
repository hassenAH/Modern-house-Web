<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <supplier-card-table />
    </div>
    <div class="w-full mb-12 px-4">
      <supplier-card-table color="dark" />
    </div>
  </div>
</template>
<script>
import SupplierCardTable from "@/components/Cards/SupplierCardTable.vue";

export default {
  components: {
    SupplierCardTable,
  },
};
</script>
