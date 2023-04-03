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
              Command Details
            </h3>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <div >
            <p>Date: {{ commandes.Date }}</p>
            <p>Etat: {{ commandes.Etat }}</p>
            <p>Username: {{ commandes.username }}</p>
            <p>Email: {{ commandes.email }}</p>
            <p>Products: {{ commandes.productname }}</p>
            <p>Quantity: {{ commandes.quantity }}</p>
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
},
mounted() {
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

  