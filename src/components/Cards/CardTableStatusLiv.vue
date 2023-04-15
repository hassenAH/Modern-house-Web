<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              class="font-semibold text-lg"
              :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
            >
              Card Tables
            </h3>
            
          </div>
          <form
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
      >
        <div class="relative flex w-full flex-wrap items-stretch">
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <i class="fas fa-search"></i>
          </span>
          <input
          v-model="search"
            type="text"
            placeholder="Search here..."
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
          />
        </div>
      </form>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse" >
          <thead>
            <tr>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Date
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Address
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                User
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              ></th>
            </tr>
          </thead>
          <tbody v-for= "commande in filteredCommandes" :key="commande._id">
            <tr>
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center" 
              >
                <span
                  class="ml-3 font-bold" 
                  :class="[
                    color === 'light' ? 'text-blueGray-600' : 'text-white',
                  ]"
  
                >
                <li>{{ commande.Date }}</li>
                
                </span>
              </th>
              <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             
              <li>{{ commande.adress }}</li>
            </td>
              <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             
              <li>{{ commande.username }}</li>
              
        
            </td>
            <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          v-on:click="ChangeEtatShipped(commande.id)"
        >
          Livred
        </button>
        <button
          class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          v-on:click="ChangeEtatReturned(commande.id)"
        >
          Return
        </button>
        <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <table-dropdown :commandeid="commande.id" :etat2="commande.Etat" />
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
 
  import axios from 'axios';
  import TableDropdown from "@/components/Dropdowns/LivreurDropDown.vue";
  export default {
    data() {
      return {
        commandes: [],
        etat1:"",
        search: '',
        etat2:"Shipping",
        refresh: false,
      };
    },
    methods: {
        getencours() {
            let userData = JSON.parse(localStorage.getItem('user'));
            axios.post('http://localhost:9090/livraison/getid',{
  idUser:userData
})
  .then(response => {
    const data = response.data;
    if (data && Array.isArray(data.cart)) {
      this.commandes = [{
        id: data.cart[0]._id,
        Date: new Date(data.cart[0].date).toISOString().substring(0, 10),
        username: data.cart[0].user[0].username,
        adress: data.cart[0].user[0].adress,
      }];
    }
    console.log(this.commandes); 
  })
  .catch(error => {
    console.log(error);
  });
},
ChangeEtatShipped(commandeid)
        {
            axios.post('http://localhost:9090/commande/changeetat/'+commandeid+"/Shipped")
    .then(response => {

       console.log(response);
       this.refresh = !this.refresh;
    })
    .catch(error => {
      console.log(error);
    });

        },
        ChangeEtatReturned(commandeid)
        {
            axios.post('http://localhost:9090/commande/changeetat/'+commandeid+"/Returned")
    .then(response => {

       console.log(response);
       this.refresh = !this.refresh;
    })
    .catch(error => {
      console.log(error);
    });

        },
  
},
mounted() {
  this.getencours();
},
watch: {
    refresh: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getencours(); // Call getshipping() whenever refresh changes
      }
    },
  },
computed: {
 
 filteredCommandes() {
   const query = this.search.toLowerCase();
   return this.commandes.filter(commande =>
     commande.Date.toLowerCase().includes(query) 
   );
},
},
components: {
    TableDropdown,
  },
    props: {
      color: {
        default: "light",
        validator: function (value) {
          // The value must match one of these strings
          return ["light", "dark"].indexOf(value) !== -1;
        },
      },
    },
    
  };
  
  </script>

  