
<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <status-card-table />
    </div>
    <div class="w-full mb-12 px-4">
      <status-card-table color="dark" />
    </div>
  </div>
</template>
<script>
import StatusCardTable from "@/components/Cards/CardTableStatusLiv.vue";

export default {
  components: {
    StatusCardTable,
  },
};
</script>