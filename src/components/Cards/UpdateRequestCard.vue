<template>
  <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Request a 3D Model For your Products  </h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form class="input-feild" @submit.prevent="handleSubmit">



        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
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
              <select v-model="productname">
                <option disabled value="">Please select one</option>
                <option v-for="(product, index) in productNames" :key="index" :value="product">{{ product }}</option>

              </select>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
          </div>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative w-full mb-3">
            <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
            >
              3D Model Link
            </label>
            <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="link"
            />
          </div>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative w-full mb-3">
            <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
            >
              Status
            </label>
            <div>
              <div class="checkbox">
                <input type="checkbox" id="checkbox" v-model="status">
                <label for="checkbox">
                  <div class="check"></div>
                  <div class="box-label">************</div>
                </label>
              </div>

            </div>
            <button
                class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="handleSubmit"
            >
              Edit Request
            </button>
          </div>
        </div>


      </form>
      <div v-if="success" class="success-message">
        <p>Request updated successfully!</p>
      </div>
    </div>
  </div>
</template>

<style>
.checkbox {
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
}

.success-message {
  background-color: #c8e6c9;
  border: 1px solid #388e3c;
  color: #388e3c;
  padding: 10px;
  margin-top: 10px;
}
</style>

<script>

import axios from "axios";
export default {
  data() {
    return {
      success : false,
      selectedFile: null,
      selectedFileUrl: null,
      productNames :[],
      link:"",
      status:0,
      productname:"",
      user:null,
    };
  },
  mounted () {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    axios.get('http://localhost:9090/Request/')
        .then(response => {
          this.productNames = response.data.map(product => product.productname)
        })
        .catch(error => {
          console.log(error)
        })
  },
  created() {
    // Retrieve the user's data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },

  methods: {
    async handleSubmit() {
      this.submitting = true;
      let result = await axios
          .put("http://localhost:9090/Request/update/", {
            productname:this.productname,
            link:this.link,
          status : this.status
          })
      console.warn(result);
      this.success = true
      if(result.status == 200 )
      {
        localStorage.setItem('user', JSON.stringify(result.data));

      }

    },
  }


};
</script>