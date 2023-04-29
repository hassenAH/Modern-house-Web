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
          >
            See all
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
            Product Name
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
             Sales
            </th>
            <th
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Owner
              </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in Products" :key="p._id">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
            {{ p.productname }}
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            {{ p.quantitySales * p.price}} $
            </td>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <img
              :src="`http://localhost:9090/img/${p.user.Image}` "
              class="h-12 w-12 bg-white rounded-full border"
                  alt="..."
              />
                <span
                class="ml-3 font-bold"
                  

                >
                {{ p.user.first_name }} {{p.user.last_name }}
                
                </span>
              </th>
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
     
   
      Products: [],
      user:null,
     

    };
  },
  methods:{



  },
  mounted() {
    
    axios.post('http://localhost:9090/produit/getBestSellingProducts',)
   .then(response => {
     this.Products = response.data;
     console.log(this.Products)
     this.Products.forEach(element => {
        axios.get('http://localhost:9090/user/'+element.user[0])
      .then(response => {
        element.user = response.data;
        console.log(element);
      })
      .catch(error => {
        console.log(error);
      });})
   })
   .catch(error => {
     console.log(error);
   });
}





}

</script>