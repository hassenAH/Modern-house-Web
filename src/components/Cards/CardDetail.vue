<template>

  <div class="bg-white shadow-lg rounded p-6">
    <h3 class="font-semibold text-xl mb-4">Command Details</h3>
    <div class="flex flex-wrap mb-4">
      <div class="w-full lg:w-1/3 mb-4 lg:mb-0">
  <p class="font-semibold text-gray-600 inline-block w-2/5">Date : </p>
  <p class="text-gray-700 inline-block w-3/5">  {{ formatDate(commandes.Date) }} </p>
</div>
      <div class="w-full lg:w-1/3 mb-4 lg:mb-0">
  <p class="font-semibold text-gray-600 inline-block w-2/5">Etat :  </p>
  <p class="text-gray-700 inline-block w-3/5">  {{ commandes.Etat }} </p>
</div>
      <div class="w-full lg:w-1/3 mb-4 lg:mb-0">
  <p class="font-semibold text-gray-600 inline-block w-2/5">Username :  </p>
  <p class="text-gray-700 inline-block w-3/5">  {{ commandes.username }}  </p>
</div>
<div class="w-full lg:w-1/3 mb-4 lg:mb-0">
  <p class="font-semibold text-gray-600 inline-block w-2/5">Email :  </p>
  <p class="text-gray-700 inline-block w-3/5">  {{ commandes.email }} </p>
</div>
    </div>
    <div class="flex flex-wrap mb-4">
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
                Product
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
              Quantity
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
              Price
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              ></th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Description
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
          <tbody >
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
                <li>{{ commandes.productname }}</li>
                
                </span>
              </th>
              <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             
              <li>{{ commandes.quantity }}</li>
            </td>
              <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             
              <li>{{ commandes.price }}</li>
              
        
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
             
              <li>{{ commandes.description }}</li>
              
        
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  <script>
  
  import axios from 'axios';

  export default {
    name: 'DetailCommande',
  data() {
    return {
      commandes: [],
    };
  },
  methods: {
    detail() {
    axios.post(`http://localhost:9090/commande/getbyidcard/${this.$route.params.id}`)
      .then(response => {
        const commande = response.data;
        this.commandes = {
            quantity:commande.quantity,
          Date: commande.date,
          Etat: commande.etat,
          username: commande.user[0].username,
          email: commande.user[0].email,
          productname : commande.products[0].productname
        };
        console.log(this.commandes); 
      })
      .catch(error => {
        console.log(error);
      }); 
  },
  formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
},
mounted() {
  axios.post(`http://localhost:9090/commande/getbyidcard/${this.$route.params.id}`)
    .then(response => {
        const commande = response.data;
        this.commandes = {
          quantity:commande.quantity,
          Date: new Date(commande.date).toISOString().substring(0, 10),
          Etat: commande.etat,
          username: commande.user[0].username,
          email: commande.user[0].email,
          productname : commande.products[0].productname,
          price : commande.products[0].price,
          description : commande.products[0].description
        };
        console.log(this.commandes); 
      })
    .catch(error => {
      console.log(error);
    });
    
},
    props: {
        commandeid:String,
        etat2:String,
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

  