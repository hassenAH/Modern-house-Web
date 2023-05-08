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
import Livreur from "@/layouts/Livreur.vue";
import SupplierMap from "@/layouts/SupplierMap.vue"

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import product from "@/views/admin/Product.vue";
import ProductList from "@/views/admin/ProductTable.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Supplier layout

import SupplierDashboard from "@/views/Supplier/Dashboard.vue";
import SupplierSettings from "@/views/Supplier/Settings.vue";
import SupplierTables from "@/views/Supplier/Tables.vue";
import SuplierCodePromo from "@/views/Supplier/SuplierCodePromoTables.vue";
import SupplierMaps from "@/views/SupplierMap/Maps.vue";
import DetailCommande from "@/views/Supplier/DetailCommande.vue";
import shipping from "@/views/Supplier/Shipping.vue";
import archive from "@/views/Supplier/Archive.vue";
import Position from "@/views/SupplierMap/Position.vue"
import MapView from "@/views/SupplierMap/MapView.vue"
// views for Livreur layout


import LivreurTables from "@/views/Livreur/Tables.vue";
import Livreurshipping from "@/views/Livreur/Shipping.vue";
import Livreurarchive from "@/views/Livreur/Archive.vue";
import Retour from "@/views/Livreur/Retour.vue";
import DetailCommandeLiv from "@/views/Livreur/DetailCommande.vue";
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
import GAuth from 'vue3-google-oauth2'

import Requests from "@/views/admin/Requests.vue";

import Request from "@/views/Supplier/Request.vue";
import DetailsAdmin from "@/views/admin/DetailsAdmin.vue";
const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    
    meta: { requiresAuth: true, requiresAdmin: true },
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
        path: "/admin/details/:modelUrl",
        name: 'DetailsAdmin',
        component: DetailsAdmin,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/requests",
        component: Requests,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
      {
        path: "/admin/products",
        component: ProductList,
      },
    ],
  },
  {
    path: "/Supplier",
    redirect: "/Supplier/dashboard",
    component: Supplier,
    meta: { requiresAuth: true, requiresSup: true },
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
      }, 
      {
        path: "/Supplier/Promos",
        component: SuplierCodePromo,
      }, {
        path: "/Supplier/product",
        component: product,
      },
      {
        path: "/Supplier/detailcommande/:id",
        name: "detailcommande",
        component: DetailCommande,
      },
      {
        path: "/Supplier/Request",
        component: Request,
      },
      {
        path: "/Supplier/shipping",
        component: shipping,
      },
      {
        path: "/Supplier/archive",
        component: archive,
      },
      
    ],
  },
  {
    path: "/SupplierMap",
    redirect: "/SupplierMap/position",
    component: SupplierMap,
    meta: { requiresAuth: true, requiresSup: true },
    children: [
      {
        path: "/SupplierMap/maps",
        component: SupplierMaps,

      },
      {
        path: "/SupplierMap/position",
        component: Position,
      },
      {
        path: "/SupplierMap/mapview",
        component: MapView,
      },
    ],
  },
  {
    path: "/Livreur",
    redirect: "/Livreur/Shipping",
    component: Livreur,
    meta: { requiresAuth: true, requiresLivreur: true },
    children: [
      {
        path: "/Livreur/tables",
        component: LivreurTables,
      },
      {
        path: "/Livreur/shipping",
        component: Livreurshipping,
      },
      {
        path: "/Livreur/archive",
        component: Livreurarchive,
      },
      {
        path: "/Livreur/detailcommande/:id",
        component: DetailCommandeLiv,
      },
      {
        path: "/Livreur/retour",
        component: Retour,
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
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
  const requiresLivreur = to.matched.some(record => record.meta.requiresLivreur)
  const requiresSup = to.matched.some(record => record.meta.requiresSup)
  if (requiresAuth && !isLoggedIn()) {
    next('/auth')
    localStorage.removeItem('user');
  } else if (requiresAdmin && !isAdmin()) {
    next('/auth')
    localStorage.removeItem('user');
  }
  else if (requiresSup && !isSup()) {
    next('/auth')
    localStorage.removeItem('user');
  } 
  else if (requiresLivreur && !isLivreur()) {
    next('/auth')
    localStorage.removeItem('user');
  }  else {
    next()
  }
})

function isLoggedIn() {
  // check if user is logged in
  const userData = localStorage.getItem('user');
  if (userData) {
   
  
    return true;
  }
  return false;
}

function isLivreur() {
  const userData = localStorage.getItem('user');
  if (userData) {
   var user = JSON.parse(userData);
    if(user.role == "Livreur")
    { return true;
    }
   
  }
  return false;
  // check if user is an admin
}
function isSup() {
  const userData = localStorage.getItem('user');
  if (userData) {
   var user = JSON.parse(userData);
    if(user.role == "Supplier")
    { return true;
    }
   
  }
  return false;
  // check if user is an admin
}
function isAdmin() {
  const userData = localStorage.getItem('user');
  if (userData) {
   var user = JSON.parse(userData);
    if(user.role == "Admin")
    { return true;
    }
   
  }
  return false;
  // check if user is an admin
}
const id = '329288049230-cb67c73dpnu42bfenvk59l868rg3cgh3.apps.googleusercontent.com'

const app = createApp(App)

app.use(router)
app.use(GAuth, { clientId:id ,
  scope: 'email',
   prompt: 'consent' });
// register other plugins here

app.mount('#app')
