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
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse">
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
                Product Name
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
                Owner
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
          <tbody>
            <tr v-for="p in Products" :key="p._id">
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
              >
                <img
                :src="`http://localhost:9090/img/${p.image}` "
                  class="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                />
                <span
                  class="ml-3 font-bold"
                  :class="[
                    color === 'light' ? 'text-blueGray-600' : 'text-white',
                  ]"
                >
                {{ p.productname }}
                </span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
              {{ p.price }} $
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <i class="fas fa-circle text-orange-500 mr-2"></i> pending
                {{ p._id }}
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
              <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"  
                
              >
              <img
              :src="`http://localhost:9090/img/${p.user.Image}` "
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
                <span
                  class="ml-3 font-bold" 
                  :class="[
                    color === 'light' ? 'text-blueGray-600' : 'text-white',
                  ]"

                >
                {{ p.user.first_name }} {{p.user.last_name }}
                
                </span>
            </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
              >
                <table-dropdown :ProductId="p._id" @child-event="receiveDataFromChild"/>
              </td>
            </tr>
  
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
  import TableDropdown from "@/components/Dropdowns/TableDropDownProduct.vue";
  
  
  
  
  import axios from 'axios';
  export default {
    data() {
      return {
        
     
        Products: [],
        user:null,
        dataFromChild:null
  
      };
    },
    methods:{
      receiveDataFromChild(data) {
      this.dataFromChild = data;
    },
    updateTable() {
      const index = this.Products.findIndex(Products =>
      Products._id == this.dataFromChild);
      if (index !== -1) {
        this.Products.splice(index, 1);
      }
    },

    },watch: {
    dataFromChild() {
      this.updateTable();
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
    }
    ,mounted() {
      
       axios.get('http://localhost:9090/produit/getall')
      .then(response => {
        this.Products = response.data;
        console.log(this.Products);
        this.Products.forEach(element => {
        axios.get('http://localhost:9090/user/'+element.user[0])
      .then(response => {
        element.user = response.data;
        console.log(element);
      })
      .catch(error => {
        console.log(error);
      });
        
      });
      })
      .catch(error => {
        console.log(error);
      });
      
  }
  };
  </script>
  