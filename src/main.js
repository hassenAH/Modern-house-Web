import { createApp  } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
import Supplier from "@/layouts/Supplier.vue";
// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import product from "@/views/admin/Product.vue";
import Products from "@/views/admin/ProductTable.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Supplier layout

import SupplierDashboard from "@/views/Supplier/Dashboard.vue";
import SupplierSettings from "@/views/Supplier/Settings.vue";
import SupplierTables from "@/views/Supplier/Tables.vue";
import SupplierMaps from "@/views/Supplier/Maps.vue";


// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import ResetPassword from "@/views/auth/ResetPassword.vue";
import ForgetPassword from "@/views/auth/ForgetPassword.vue";
import OTP from "@/views/auth/OTP.vue"
// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
 
import Index from "@/views/Index.vue";


// routes
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '825384301124-cjfejm7c4ukpr06bu6g5mdsvtprgjjeo.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
     
      {
        path: "/admin/maps",
        component: Maps,
      },
      {
        path: "/admin/products",
        component: Products,
      },
    ],
  },
  {
    path: "/Supplier",
    redirect: "/Supplier/dashboard",
    component: Supplier,
    children: [
      {
        path: "/Supplier/dashboard",
        component: SupplierDashboard,
      },
      {
        path: "/Supplier/settings",
        component: SupplierSettings,
      },
      {
        path: "/Supplier/tables",
        component: SupplierTables,
      }, {
        path: "/Supplier/product",
        component: product,
      },
      {
        path: "/Supplier/maps",
        component: SupplierMaps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
      {
        path: "/auth/ResetPassword",
        component: ResetPassword,
      },
      {
        path: "/auth/ForgetPassword",
        component: ForgetPassword,
      },
      {
        path: "/auth/OTP",
        component: OTP,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
import VueImageChooser from 'vue-image-chooser'

createApp(App).use(router,VueImageChooser,GAuth, gauthOption).mount("#app");
