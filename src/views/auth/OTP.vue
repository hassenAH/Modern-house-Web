<template>
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
          >
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="text-center mb-3">
                <p>Enter the code</p>
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
                    Code
                  </label>
                  <input
                    type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    v-model="code"
                  />
                </div>
  
                
                
  
                <div class="text-center mt-6">
                  <button
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    v-on:click="handleSubmit"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex flex-wrap mt-6 relative">
            <div class="w-1/2">
              <button  class="text-blueGray-200"
              v-on:click="backtoresetpass">
                <small>retype the email</small>
              </button>
            </div>
            <div class="w-1/2 text-right">
                <button  class="text-blueGray-200"
              v-on:click="resend">
                <small>retype the email</small>
              </button>
          </div>
            
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
        
        code:"",
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
        if(this.code!="")
    {
        let result = await axios
          .post("http://localhost:9090/user/resetpassword", {
            code: this.code,
            
          }).catch((error) => {
      console.log(error)
      Toast.fire ('Opps !! Try Again') 
    });

          console.warn(result);
          if(result.status == 200 )
          {
            Toast.fire ('Code is Correct') 
      setTimeout(() => {  this.refresh = !this.refresh; }, 1000)
      this.$router.push('/auth/ForgetPassword')
          }
          console.warn(result);
          
        
          
    }
       
      },
      backtoresetpass()
      {
        this.$router.push('/auth/ResetPassword')
      },
      async resend() {
        this.submitting = true;
        let result = await axios
          .post("http://localhost:9090/user/resetpwd", {
            email: this.email,
            
          }).catch((error) => {
      console.log(error)
      Toast.fire ('Opps !! Try Again') 
    });
          console.warn(result);
         }
  }
  };
  </script>
  