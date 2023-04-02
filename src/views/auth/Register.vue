<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                Sign up with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
             
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign up with credentials</small>
            </div>
            <form class="input-feild" @submit.prevent="handleSubmit">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  First Name
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="first Name"
                  v-model="first_name"
                />
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.first_name">{{msg.first_name}}</span>
              </div>
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                 Last Name
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Last Name"
                  v-model="last_name"
                />
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.last_name">{{msg.last_name}}</span>
              </div>
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                 Company Name
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Company Name"
                  v-model="company_name"
                />
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.company_name">{{msg.company_name}}</span>
              </div>
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                 Telephone Number
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Telephone Number"
                  v-model="telephone_number"
                />
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.telephone_number">{{msg.telephone_number}}</span>
              </div>
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                 Fiscal Code
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Fiscal Code"
                  v-model="code_fiscal"
                />
                <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.code_fiscal">{{msg.code_fiscal}}</span>
              </div>
              </div>


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
              </div>
              <div style="padding-top: 0px;
  margin-top: 0px;
  font-size: 12px; color:red;">
                  <span v-if="msg.password">{{msg.password}}</span>
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    I agree with the
                    <a href="javascript:void(0)" class="text-emerald-500">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
              <div id="hmed" v-if="!cap">
              <div class="np-captcha-container">
               <div class="np-captcha" v-if="captcha && captcha.length">
        <div
          v-for="(c, i) in captcha"
          :key="i"
          :style="{
            fontSize: getFontSize() + 'px',
            fontWeight: 800,
            transform: 'rotate(' + getRotationAngle() + 'deg)',
          }"
          class="np-captcha-character"
        >
          {{ c }}
          
        </div>
       
      </div>
      <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Captcha"
                  v-model="capt"
                />
    </div>
    <div class="btn-wrapper text-center">
      <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                @click="createCaptcha"
              >
                <img alt="..." class="w-5 mr-1" :src="refresh" />
              
              </button>
   
   
    </div>
    <button @click="validCaptcha" class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150">Valid Captcha </button>
    
  </div>
              <div class="text-center mt-6">
                <button
                v-if="cap"
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  v-on:click="handleSubmit"
                >
                  Create Account
                </button>
              </div>
            </form>
            
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <router-link to="/auth/login" class="text-blueGray-200">
              <small>Already have an account ? Sign In</small>
            </router-link>
          </div>
          <div class="w-1/2 text-right">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import refresh from "@/assets/img/refresh.png";
import google from "@/assets/img/google.svg";
import axios from "axios";
export default {
  data() {
    return {
      google,
      refresh,
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      company_name:"",
      telephone_number:"",
      code_fiscal:"",
      categorie:"",
      captchaLength: 5,
      captcha: "",
cap:false,

capt:"",
msg: [],
regexPhone:/^\+?[1-9][0-9]{7,14}$/,
regexCodeFiscal:/^[0-9]{8}$/,
regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    };
  }
  ,watch: {
    email(value){
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    } 
    , password(value){
      this.password = value;
      this.validatePassword(value);
    }
    ,first_name(value){
      this.first_name = value;
      this.validateFirst_Name(value);
    },last_name(value){
      this.last_name = value;
      this.validatelast_name(value);
    }
    ,company_name(value){
      this.company_name = value;
      this.validatecompany_name(value);
    }
    ,telephone_number(value){
      this.telephone_number = value;
      this.validatetelephone_number(value);
    }
    ,code_fiscal(value){
      this.code_fiscal = value;
      this.validatecode_fiscal(value);
    },
  },mounted() {
    
    this.createCaptcha();
  },
  methods: {
    validateEmail(value){
       
       if (this.regex.test(value))
   {
     this.msg['email'] = '';
   } else{
     this.msg['email'] = 'Invalid Email Address';
   } 
     },
     validatetelephone_number(value){
       
       if (this.regexPhone.test(value))
   {
     this.msg['telephone_number'] = '';
   } else{
     this.msg['telephone_number'] = 'Invalid Phone Number';
   } 
     },
     validatePassword(value){
       let difference = 8 - value.length;
       if (value.length<8) {
         this.msg['password'] = 'Must be 8 characters! '+ difference + ' characters left' ;
       } else {
          this.msg['password'] = '';
       }
     },
     
     validatecode_fiscal(value){
       
       if (this.regexCodeFiscal.test(value)) {
         this.msg['code_fiscal'] = 'Invalid Code Fiscal' ;
       } else {
          this.msg['code_fiscal'] = '';
       }
     },
     validateFirst_Name(value){
       let difference = 8 - value.length;
       if (value.length<8) {
         this.msg['first_name'] = 'Must be 8 characters! '+ difference + ' characters left' ;
       } else {
          this.msg['first_name'] = '';
       }
     }
     ,
     validatelast_name(value){
       let difference = 8 - value.length;
       if (value.length<8) {
         this.msg['last_name'] = 'Must be 8 characters! '+ difference + ' characters left' ;
       } else {
          this.msg['last_name'] = '';
       }
     },
     validatecompany_name(value){
       let difference = 8 - value.length;
       if (value.length<8) {
         this.msg['company_name'] = 'Must be 8 characters! '+ difference + ' characters left' ;
       } else {
          this.msg['company_name'] = '';
       }
     }
   ,
    createCaptcha() {
      
        let tempCaptcha = "";
      for (let i = 0; i < this.captchaLength; i++) {
        tempCaptcha += this.getRandomCharacter();
      }
      this.captcha = tempCaptcha;
      
     
    },
    validCaptcha()
    {
     
      if(this.capt == this.captcha)
      {
        this.cap =true;
      }
    },
    getRandomCharacter() {
      const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const randomNumber = Math.floor(Math.random() * 36);
      return symbols[randomNumber];
    },
    getFontSize() {
      const fontVariations = [14, 20, 30, 36, 40];
      return fontVariations[Math.floor(Math.random() * 5)];
    },
    getRotationAngle() {
      const rotationVariations = [5, 10, 20, 25, -5, -10, -20, -25];
      return rotationVariations[Math.floor(Math.random() * 8)];
    },
   async handleSubmit() {
      this.submitting = true;
      let result = await axios
        .post("http://localhost:9090/user/fournisseur", {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name,
          
          
          company_name: this.company_name,
          code_fiscal: this.code_fiscal,
          telephone_number: this.telephone_number,
        
          categorie: this.categorie,

        })
        console.warn(result);
        if(result.status == 200)
        {
          this.$router.push('/auth/login')
        }
    },
}
};

</script>
<style>
#hmed {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
.np-captcha-container {
  background: #eee;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.np-captcha {
  font-size: 24px;
}
.np-button {
  padding: 6px 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  font-size: 16px;
}
.np-captcha-character {
  display: inline-block;
  letter-spacing: 14px;
}
</style>