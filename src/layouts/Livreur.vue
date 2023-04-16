<template>
    <div>
      <sidebar />
      <div class="relative md:ml-64 bg-blueGray-100">
        <supplier-navbar />
        <header-stats />
        <div class="px-4 md:px-10 mx-auto w-full -m-8">
          <router-view />
          <footer-admin />
        </div>
      </div>
    </div>
  </template>
  <script>
  import SupplierNavbar from "@/components/Navbars/SupplierNavbar.vue";
  import Sidebar from "@/components/Sidebar/LivreurSidebar.vue";
  import HeaderStats from "@/components/Headers/HeaderLivreur.vue";
  import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
  export default {
    name: "Supplier-layout",
    components: {
    // eslint-disable-next-line vue/no-unused-components
    SupplierNavbar,
      Sidebar,
      HeaderStats,
      FooterAdmin,
    },
  };
  </script>
  