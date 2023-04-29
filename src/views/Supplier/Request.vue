<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 px-4">
      <CardRequestForm />
    </div>
    <div class="w-full mb-12 px-4">
      <card-table />
    </div>
  </div>
</template>
<script>
import CardRequestForm from "@/components/Cards/CardRequestForm.vue";
import CardTable from "@/components/Cards/CardTable.vue";
export default {
  components: {
    CardRequestForm,
    CardTable
  },
};
</script>
