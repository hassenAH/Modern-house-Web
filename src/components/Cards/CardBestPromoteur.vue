<template>
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">
              Best Product
            </h3>
          </div>
          <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
          >
            <button
              class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              @click="sortArray"
            > Sort 
            <i :class="ascendingSortOrder ? 'fas fa-sort-numeric-up' : 'fas fa-sort-numeric-down'"></i>



            </button>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
              Code 
              </th>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
               Total 
              </th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in promos" :key="p._id">
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
              >
              {{ p.code }}
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
              {{ p.quantity }} 
              </td>
             
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
  
  import axios from 'axios';
  export default {
    data() {
      return {
       
     
        promos: [],
        user:null,
        ascendingSortOrder: true
  
      };
    },created() {
    // Retrieve the user's data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    
  },
    methods:{
  
        sortArray() {
            this.ascendingSortOrder = !this.ascendingSortOrder;
    if (this.ascendingSortOrder) {
      this.promos.sort(function(a, b) {
        return a.quantity - b.quantity;
      });
    } else {
      this.promos.sort(function(a, b) {
        return b.quantity - a.quantity;
      });
    }
  }
  
    },
    mounted() {
      
      axios.post('http://localhost:9090/Promo/getBestSellingPromos',{
        user : this.user._id
      })
     .then(response => {
       this.promos = response.data;
       console.log(this.promos)
       
     })
     .catch(error => {
       console.log(error);
     });
  }
  
  
  
  
  
  }
  
  </script>