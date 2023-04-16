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
                statSubtitle="PERFORMANCE"
                statTitle="49,65%"
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
          totalAmount:0
          
        }},
    components: {
      CardStats,
      
    },methods:{
     
    getTotalSales(){
      axios.get('http://localhost:9090/commande/getAllcommanade')
        .then(response => {
          
          this.commande= response.data;
        
          this.commande.forEach(element => {
            axios.post('http://localhost:9090/commande/total',
      {
         _id:element._id
      })
      .then(response => {
        this.nbSales +=response.data.totalAmount;
          })  
        .catch(error => {
          console.log(error);
        }); 
            
            
          });
         
        })
        .catch(error => {
          console.log(error);
        }); 
    }, gettotal(commandeid ) {
      axios.get('http://localhost:9090/commande/total',
      {
         _id:commandeid
      })
      .then(response => {
            this.totalAmount = response.data.totalAmount;
          })
        .catch(error => {
          console.log(error);
        }); 
    },
      getUserLastMonth() {
      axios.get('http://localhost:9090/produit/countLastsProduct')
        .then(response => {
          
          this.nbProduct= response.data;
          console.log(this.nbProduct); 
        })
        .catch(error => {
          console.log(error);
        }); 
    }},
    mounted() {
      this.getTotalSales()
    this.getUserLastMonth();
  },
  };
  </script>
  