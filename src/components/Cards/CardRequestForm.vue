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

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Provide Additional Product Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                Information :
              </label>
              <textarea
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows="4"

                  v-model="description"
              >

                    </textarea
                    >
              <div class="file-uploader">
                <br><br>
                <label for="fileInput" class="file-uploader__label">
                  <span>Select a file</span>
                  <input type="file" id="fileInput" class="file-uploader__input" @change="onFileSelected" ref="fileInput" />
                </label>

                <div v-if="selectedFileUrl" class="file-preview">
                  <img :src="selectedFileUrl" class="file-preview__image" />
                </div>

                <button @click="uploadFile" class="file-uploader__button" :disabled="!selectedFile">Submit Request</button>
              </div>
              <div v-if="success" class="success-message">
                <p>Form submitted successfully!</p>
              </div>            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
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
      description:"",
      productname:"",
      user:null,
    };
  },
  mounted () {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    axios.post('http://localhost:9090/produit/getuserproduct',{
      user: this.user._id
    })
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
          .post("http://localhost:9090/Request/addrequest/", {
            productname: this.productname,
            description: this.description,
            image:this.selectedFile.name,
            user: this.user._id,
          })
      console.warn(result);
      this.success = true
      if(result.status == 200 )
      {
        localStorage.setItem('user', JSON.stringify(result.data));

      }

    },
    onFileSelected(event) {
      const selectedFile = event.target.files[0];
      this.selectedFile = selectedFile;

      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (event) => {
        this.selectedFileUrl = event.target.result;
      };
    },
    uploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);

      axios
          .post("http://localhost:9090/upload", formData)
          .then((response) => {
            console.log(response.data);

          })
          .catch((error) => {
            console.log(error);
          });
    }
  }


};
</script>