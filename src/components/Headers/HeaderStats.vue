<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <card-stats
                statSubtitle="NEW Products"
                :statTitle= "nbProduct"
                statArrow=""
                statPercent=""
                statPercentColor="text-red-500"
                statDescripiron="Since last week"
                statIconName="fas fa-percent"
                
                statIconColor="bg-emerald-500"
              />
            </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="NEW USERS"
              :statTitle= "nbUser"
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
        nbUser:"0",
        totalAmount:0,
        nbProduct:0
      }},
  components: {
    CardStats,
    
  },methods:{
    
      getProductLastMonth() {
      axios.get('http://localhost:9090/produit/countLastsProduct ')
        .then(response => {
          
          this.nbProduct= response.data;
          console.log(this.nbProduct); 
        })
        .catch(error => {
          console.log(error);
        }); 
    },
gettotalSales() {
      axios.post('http://localhost:9090/produit/getTotalSales',
      )
      .then(response => {
            this.totalAmount = response.data;
          })
        .catch(error => {
          console.log(error);
        }); 
    },
    getUserLastMonth() {
    axios.get('http://localhost:9090/user/countLastWeekUsers')
      .then(response => {
        
        this.nbUser= response.data;
        console.log(this.nbUser); 
      })
      .catch(error => {
        console.log(error);
      }); 
  }},
  mounted() {
    this.getProductLastMonth();
    this.gettotalSales();
   
  this.getUserLastMonth();
},
};
</script>
