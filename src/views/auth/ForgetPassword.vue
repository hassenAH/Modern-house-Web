<template>
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
          >
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="text-center mb-3">
                <p>Enter the your new password</p>
              </div>
              
              <hr class="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              
              <form class="input-feild" @submit.prevent="handleSubmit">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                  Password
                  </label>
                  <input
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                  Confirm Password
                  </label>
                  <input
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Confirm Password"
                    v-model="confpassword"
                  />
                </div>
                
  
                
                
  
                <div class="text-center mt-6">
                  <button
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    v-on:click="handleSubmit"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex flex-wrap mt-6 relative">
            
            
            
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  
  
  import axios from "axios";
  import Swall from 'sweetalert2'

const Toast = Swall.mixin({
 toast: true,
 position: 'top-end',
 showConfirmButton: false,
 timer: 3000,
 timerProgressBar: true,
 didOpen: (toast) => {
   toast.addEventListener('mouseenter', Swall.stopTimer)
   toast.addEventListener('mouseleave', Swall.resumeTimer)
 }
})
  export default {
    data() {
      return {
        
        password:"",
        confpassword:"",
        email:""
        
      };
    },
    created() {
    // Retrieve the user's data from local storage
    this.email = localStorage.getItem('email');
    
    
  },
    methods: {
        
     async handleSubmit() {
        this.submitting = true;
        if(this.password!="" && (this.password == this.confpassword))
    {
        let result = await axios
          .post("http://localhost:9090/user/changepwd", {
            password: this.password,
            email:this.email
            
          }).catch((error) => {
      console.log(error)
      Toast.fire ('Opps !! Try Again') 
    });
          console.warn(result);
          if(result.status == 200)
          {
            localStorage.removeItem('email');
            Toast.fire ('Password updated') 
      setTimeout(() => {  this.refresh = !this.refresh; }, 1000)
            this.$router.push('/auth/Login')
            
            
           
          }
    }
       
      },
     
  }
  };
  </script>
  