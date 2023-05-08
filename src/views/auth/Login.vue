<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              
              <a :href="getGoogleUrl(from) " >
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                
              >
           
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </a>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form class="input-feild"  @submit.prevent="handleSubmit">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  v-model="email"
                />
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.email">{{msg.email}}</span>
                </div>
                
               
              </div>

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
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.password">{{msg.password}}</span>
                </div>
                
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  v-on:click="handleSubmit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <button  v-on:click="forgetpass" class="text-blueGray-200">
              <small>Forgot password?</small>
            </button>
          </div>
          <div class="w-1/2 text-right">
            <router-link to="/auth/register" class="text-blueGray-200">
              <small>Create new account</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import google from "@/assets/img/google.svg";
import axios from "axios";
import { getGoogleUrl } from './utils/getGoogleUrl';
export default {
  data() {
    return {
      google,
      email:"",
      password:"",
      msg: [],
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    };
  },watch: {
    email(value){
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    } 
    , password(value){
      this.password = value;
      this.validatePassword(value);
    }
  },
  setup(){
   
   
    return{
      
      getGoogleUrl
    }
  },
  methods: {
    onSignIn(googleUser)
    {
      var profile = googleUser.getBasicProfile();
                console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());  
    },

    validateEmail(value){
       
      if (this.regex.test(value))
  {
    this.msg['email'] = '';
  } else{
    this.msg['email'] = 'Invalid Email Address';
  } 
    },
    validatePassword(value){
      let difference = 8 - value.length;
      if (value.length<8) {
        this.msg['password'] = 'Must be 8 characters! '+ difference + ' characters left' ;
      } else {
         this.msg['password'] = '';
      }
    }
  ,
   async handleSubmit() {
      this.submitting = true;
      let result = await axios
        .put("http://localhost:9090/user/", {
          email: this.email,
          password: this.password,
          
        })
        console.warn(result.headers);
        if(result.status == 200)
        {
          localStorage.setItem('user', JSON.stringify(result.data));
          if(result.data.verified)
            {
          if(result.data.role == "user"  )
          {
            
          this.$router.push('/profile')
          }else if(result.data.role == "Supplier")
          {
            
          this.$router.push('/Supplier')
          }
          else if(result.data.role == "Livreur")
          {
            
          this.$router.push('/Livreur')
          }
          else if(result.data.role == "Admin" )
          {
            
           
              this.$router.push('/admin') 

            
            
          }
        }
         
        }
    },
    forgetpass(){

      this.$router.push('/auth/ResetPassword')
    },
    
}
};
</script>
