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
        <div class="w-full lg:w-4/12 px-4"><div class="file-uploader">
          <br><br>
          <label for="fileInput" class="file-uploader__label">
            <span>Select a file</span>
            <input type="file" id="fileInput" class="file-uploader__input" @change="onFileSelected" ref="fileInput" />
          </label>

          <div v-if="selectedFileUrl" class="file-preview">
            <img :src="selectedFileUrl" class="file-preview__image" />
          </div>

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
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-color: #f7fafc;
  color: #4a5568;
}

/* Form styles */
.form-wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.form-wrapper h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group select {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;
}

.form-group input[type="text"]:focus,
.form-group select:focus {
  outline: none;
  border-color: #4a90e2;
}

.form-group .checkbox {
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
}

.form-group .checkbox input[type="checkbox"] {
  display: none;
}

.form-group .checkbox label {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding-left: 30px;
  margin-bottom: 0;
}

.form-group .checkbox label .check {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.form-group .checkbox label .check::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 2px;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
}

.form-group .checkbox label:hover .check {
  border-color: #4a90e2;
}

.form-group .checkbox input[type="checkbox"]:checked + label .check::after {
  background-color: #4a90e2;
}

.form-group .checkbox .box-label {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

.form-group .checkbox .box-label a {
  color: #4a90e2;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
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
            link:this.selectedFile.name,
          status : this.status
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