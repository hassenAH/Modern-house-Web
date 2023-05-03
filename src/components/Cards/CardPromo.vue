<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">My new Code Promo </h6>
          <button
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            Settings
          </button>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form class="input-feild" @submit.prevent="handleSubmit">
          
          
  
          <hr class="mt-6 border-b-1 border-blueGray-300" />
  
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Code Promo Information
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Code
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="code" 
                />
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.code">{{msg.code}}</span>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Discount
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="discount" 
                />
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                ExpirationDate
                </label>
                
                
                <input
                type="date"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="expirationDate" 
                />
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.ExpirationDate">{{msg.ExpirationDate}}</span>
                </div>
              </div>
            </div>
           
            <div class="w-full lg:w-4/12 px-4">
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.Alert">{{msg.Alert}}</span>
                </div>
            </div>
          </div>
  
        
          
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
               
                <button
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
            v-on:click="handleSubmit"
          >
            Add The Code
          </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  
 import axios from "axios";
 import moment from "moment";


  export default {
    data() {
      return {
        
        code:"",
        discount:"",
        expirationDate:"",
        msg: [],
        user:null,
      };
    },watch: {
        expirationDate(value){
      // binding this to the data value in the email input
      this.expirationDate = value;
      this.validateExpirationDate(value);
    } 
    , code(value){
      this.code = value;
      this.validatecode(value);
    }
  },
  created() {
    // Retrieve the user's data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
    
    methods: {
      varif()
      {
        this.msg.forEach(element => {
          if(element!="")
          {
            return true;
          }
          return false;
        })
      },
      validatecode(value)
      {
        let difference = 8 - value.length;
      if (value.length<8) {
        this.msg['code'] = 'Must be 8 characters! '+ difference + ' characters left' ;
      } else {
         this.msg['code'] = '';
      }
      },
        validateExpirationDate(value){
            var date1 = moment(value).format("dd-mm-yyyy")
var date2 = moment(new Date()).format("dd-mm-yyyy")
if(date1 <  date2){
    //Do your thing
    this.msg['ExpirationDate'] = '';
} else {
    this.msg['ExpirationDate'] = 'Invalid Date';
}
       
     },
     async handleSubmit() {
        this.submitting = true;
        if(this.varif())
        {
            this.msg['Alert'] = 'You need to complete the Form';   
        }
        else
        {
            let result = await axios
          .post("http://localhost:9090/Promo/add/", {
            code: this.code,
            discount: this.discount,
            expirationDate: this.expirationDate,
            idUser: this.user._id,
            
          
            
  
          })
          if(result.response
.status != 200)
          {
            this.msg['Alert'] = 'You need to complete the Form';   
          }else {
         this.msg['Alert'] = '';
      }
          console.warn(result);
        }
        
         
          
      },
  }
  };
  </script>