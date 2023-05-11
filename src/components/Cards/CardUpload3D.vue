<template>
  <div class="file-upload">
    <input type="file" @change="onFileChange" accept="image/*, model/gltf-binary, .glb" />
    <button @click="onUploadFile" class="upload-button"
            :disabled="!this.selectedFile">Upload Model</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: "",
    };
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.selectedFile = selectedFile;
    },
    onUploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);  // appending file

      // sending file to the backend
      axios
          .post("http://localhost:9090/upload", formData)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
    }
  }
};
</script>
