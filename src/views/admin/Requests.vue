<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <RequestsCard />
    </div>
    <div class="w-full mb-12 px-4">
      <EditRequest color="dark" />
    </div>

  </div>
</template>
<script>
import RequestsCard from "@/components/Cards/RequestsCard.vue";
import EditRequest from "@/components/Cards/UpdateRequestCard.vue";

export default {
  components: {
    RequestsCard,
    EditRequest
  },
};
</script>
