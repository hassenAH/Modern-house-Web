<template>
    <div>
      <sidebar />
      <div class="relative md:ml-64 bg-blueGray-100">
        <supplier-Navbar />
        <div></div>
        <header-stats />
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
          <router-view />
          <footer-admin />
        </div>
      </div>
    </div>
  </template>
  <script>
  import SupplierNavbar from "@/components/Navbars/SupplierNavbar.vue";
  import Sidebar from "@/components/Sidebar/SupplierSidebar.vue";
  import HeaderStats from "@/components/Headers/HeaderStatsSupplier.vue";
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
  