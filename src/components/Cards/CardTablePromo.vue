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
              Card Users Tables
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
                Code 
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Discount
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
              ExpirationDate
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
          <tbody v-for= "codePromo in filteredcodePromo" :key="codePromo._id" >
            <tr>
              
              
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
              {{ codePromo.code }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
               
              {{ codePromo.discount }} %
              </td>
             
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
              <select @change="active(codePromo)" v-model="codePromo.Status" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
        <option value="true" >active</option>
        <option value="false">desactive</option>
        
      </select>
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
               
              {{ codePromo.expirationDate }}
              </td>
              
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
              >
                <table-dropdown :id="codePromo._id" @child-event="receiveDataFromChild"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
  import TableDropdown from "@/components/Dropdowns/TablePromoDropdown.vue";
  

  

  import axios from 'axios';

  export default {
    data() {
      return {
        search:"",
        codePromos: [],
        user:null,
        dataFromChild:null
      };
    },
  created() {
    // Retrieve the user's data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
    
    methods: {
      
      active(codePromo){
      
          axios.post('http://localhost:9090/Promo/disable/'+codePromo._id)
    .then(response => {

       console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
        
        
        },
  getAllCodePromo() {
    axios.get('http://localhost:9090/user/FindPromobyUser/'+this.user._id)
    .then(response => {
        console.log(response.data)
        response.data.forEach(element => {
           
                if(element.active)
              {
                element.Status="true"
              }
              else
              {
                element.Status="false"
              }
              element.expirationDate= new Date(element.expirationDate).toISOString().substring(0, 10),
              
    
                   this.codePromos.push(element)
            }
        );
       
      
    })
    .catch(error => {
      console.log(error);
    });
    
  },
  receiveDataFromChild(data) {
      this.dataFromChild = data;
    },
    updateTable() {
      const index = this.codePromos.findIndex(code =>
        code._id == this.dataFromChild);
      if (index !== -1) {
        this.codePromos.splice(index, 1);
      }
      
      // Update table logic here
    },
  
},computed: {
 
    filteredcodePromo() {
   const query = this.search.toLowerCase();
   return this.codePromos.filter(promo =>
     
   promo.code.toLowerCase().includes(query)
   );
 },
},
watch: {
    dataFromChild() {
      this.updateTable();
    },},
mounted() {
  this.getAllCodePromo();
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

  