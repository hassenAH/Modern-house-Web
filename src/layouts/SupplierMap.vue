<template>
    <div>
      <sidebar />
      <div class="relative md:ml-64 bg-blueGray-100">
        <supplier-map-Navbar />
        <div></div>
        <div class="px-4 md:px-10 mx-auto w-full -m-12">
          <router-view />
          <footer-admin />
        </div>
      </div>
    </div>
  </template>
  <script>
  import SupplierMapNavbar from "@/components/Navbars/SupplierNavbar.vue";
  import Sidebar from "@/components/Sidebar/SupplierSidebar.vue";
  import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
  export default {
    name: "SupplierMap-layout",
    components: {
    // eslint-disable-next-line vue/no-unused-components
    SupplierMapNavbar,
      Sidebar,
      FooterAdmin,
    },
  };
  </script>
  