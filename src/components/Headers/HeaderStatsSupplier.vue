<template>
    <!-- Header -->
    <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
      <div class="px-4 md:px-10 mx-auto w-full">
        <div>
          <!-- Card stats -->
          <div class="flex flex-wrap">
           
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="NEW Product"
                :statTitle= "nbProduct"
                statArrow=""
                statPercent=""
                statPercentColor="text-red-500"
                statDescripiron="Since last week"
                statIconName="fas fa-users"
                
                statIconColor="bg-orange-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="SALES"
                :statTitle="totalAmount"
                statArrow="down"
                statPercent="1.10"
                statPercentColor="text-orange-500"
                statDescripiron="Since yesterday"
                statIconName="fas fa-chart-pie"
                statIconColor="bg-pink-500"
              />
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="TOTAL ORDERS"
                :statTitle="totalOrders"
                statArrow="up"
                statPercent="12"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="fas fa-percent"
                statIconColor="bg-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CardStats from "@/components/Cards/CardStats.vue";
  import axios from 'axios';
  export default {
    data() {
        return {
          Users: [],
          commande:[],
          nbProduct:"0",
          totalAmount:0,
          totalOrders:0
          ,
          user:null
        }},
    components: {
      CardStats,
      
    },created() {
    // Retrieve the user's data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },methods:{
     
    getTotalSales(){
      axios.get('http://localhost:9090/commande/getAllcommanade')
        .then(response => {
          
          this.totalOrders= response.data.length;
        
        
         
        })
        .catch(error => {
          console.log(error);
        }); 
    }, gettotalSales() {
      axios.post('http://localhost:9090/produit/getTotalSalesbySupplier',{
        user: this.user._id
      }
      )
      .then(response => {
            this.totalAmount = response.data;
          })
        .catch(error => {
          console.log(error);
        }); 
    },
      getUserLastMonth() {
      axios.get('http://localhost:9090/produit/ ')
        .then(response => {
          
          this.nbProduct= response.data;
          console.log(this.nbProduct); 
        })
        .catch(error => {
          console.log(error);
        }); 
    }},
    mounted() {
        this.gettotalSales()
      this.getTotalSales()
    this.getUserLastMonth();
  },
  };
  </script>
  