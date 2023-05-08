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
                Budget
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Status
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
              >
                Completion
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
                0
              </td>
              <div>
                <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
              <select @change="ChangeEtat(commande.id,commande.Etat)" v-model="commande.Etat" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                <option value="Shipping">Shipping</option>
                <option value="Shipped">Shipped</option>
                 <option value="Returned">Returned</option>
        
      </select>
              </td>

              <modal v-if="showSuccessModal" @close="showSuccessModal = false">
      <h3>Status changed successfully!</h3>
    </modal>
    <modal v-if="showErrorModal" @close="showErrorModal = false">
      <h3>Status changed failed!</h3>
    </modal>
              </div>
              
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
               
                <li>{{ commande.username }}</li>
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex items-center">
                  <span class="mr-2">60%</span>
                  <div class="relative w-full">
                    <div
                      class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                    >
                      <div
                        style="width: 60%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
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
  import TableDropdown from "@/components/Dropdowns/SupplierDropdown.vue";
  import axios from 'axios';
  import Swall from 'sweetalert2'
const Toast = Swall.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swall.stopTimer)
    toast.addEventListener('mouseleave', Swall.resumeTimer)
  }
})

  export default {
    data() {
      return {
        commandes: [],
        etat1:"",
        search: '',
        refresh: false,
        showSuccessModal: false,
        showErrorModal: false,
      };
    },
    methods: {
  getArchive() {
    axios.post('http://localhost:9090/commande/getShippedAndReturnedCarts')
      .then(response => {
        this.commandes = response.data.map(p => ({
            id:p._id,
            Date: new Date(p.date).toISOString().substring(0, 10),
          Etat: p.etat,
          username : p.user[0].username
          
        }));
        console.log(this.commandes); 
      })
      .catch(error => {
        console.log(error);
      }); 
  },
  ChangeEtat(commandeid,etat2)
        {
            axios.post('http://localhost:9090/commande/changeetat/'+commandeid+"/"+etat2)
            .then((response) => {
      console.log(response)
      Toast.fire ('Etat changer avec succee') 
      setTimeout(() => {  this.refresh = !this.refresh; }, 1000)
    })
    .catch((error) => {
      console.log(error)
      Toast.fire ('Opps !! Try Again') 
    });

        },
  
},
mounted() {
  this.getArchive();
},
watch: {
    refresh: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getArchive(); // Call getshipping() whenever refresh changes
      }
    },
  },
computed: {
 
 filteredCommandes() {
   const query = this.search.toLowerCase();
   return this.commandes.filter(commande =>
    
     commande.Etat.toLowerCase().includes(query)
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

  