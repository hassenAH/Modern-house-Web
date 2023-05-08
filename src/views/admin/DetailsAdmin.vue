<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <Card3D :modelUrl="modelUrl" />
    </div>
  </div>
</template>
<script>
import Card3D from "@/components/Cards/Card3D.vue";

export default {

  components: {
    Card3D
  },
  data() {
    return {
      modelUrl: ''
    };
  },
  created() {
    // Access the URL parameter using $route.params
    this.modelUrl = this.$route.params.modelUrl;
  }
}

;
</script>
