<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">My new Product </h6>
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
            Product Information
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Product Name
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="productname" 
                />
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Price
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="price" 
                />
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Quantity
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="quantity" 
                />
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Category
                </label>
                <select v-model="category" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
        <option value="seramic" >seramic</option>
        <option value="flooring">flooring</option>
        <option value="electrical">electrical</option>
        <option value="kitchen">kitchen</option>
        <option value="lighting">lighting</option>
        <option value="masonry">masonry</option>
        <option value="paints">paints</option>
        <option value="walls">walls</option>
      </select>
               
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              
            </div>
          </div>
  
          <hr class="mt-6 border-b-1 border-blueGray-300" />
  
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            About the Product
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  About :
                </label>
                <textarea
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows="4"

                  v-model="description"
                >
                     
                    </textarea
                >
                <button
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
            v-on:click="handleSubmit"
          >
            Add Product
          </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  import Swall from 'sweetalert2'
 import axios from "axios";
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
        
        category:"",
        description:"",
        price:"",
        quantity:"",
        productname:"",
        user:null,
      };
    },
  created() {
    // Retrieve the user's data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log(userData)
    }
  },
    
    methods: {
     async handleSubmit() {
        this.submitting = true;
        let result = await axios
          .post("http://localhost:9090/produit/addproduct/", {
            productname: this.productname,
            price: this.price,
            quantity: this.quantity,
            category: this.category,
            description: this.description,
            user: this.user._id,
            
          
            
  
          }).catch((error) => {
      console.log(error)
      Toast.fire ('Opps !! Try Again') 
    });

          console.warn(result);
          if(result.status == 200 )
          {
            Toast.fire ('Product added') 
      setTimeout(() => {  this.refresh = !this.refresh; }, 1000)
          }
          
      },
  }
  };
  </script>