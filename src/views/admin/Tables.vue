<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table />
    </div>
    <div class="w-full mb-12 px-4">
      <card-table1 color="dark" />
    </div>
  </div>
</template>
<script>
import CardTable from "@/components/Cards/CardTableUsersSupplier.vue";
import CardTable1 from "@/components/Cards/CardTableUsers.vue";
export default {
  components: {
    CardTable,
    CardTable1
  },
};
</script>
