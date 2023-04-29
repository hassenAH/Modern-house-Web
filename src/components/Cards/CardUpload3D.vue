<template>

  <div class="file-uploader">
    <br><br>
    <label for="fileInput" class="file-uploader__label">
      <span>Select a file</span>
      <input type="file" id="fileInput" class="file-uploader__input" @change="onFileSelected" ref="fileInput" />
    </label>

    <div v-if="selectedFileUrl" class="file-preview">
      <img :src="selectedFileUrl" class="file-preview__image" />
    </div>

    <button @click="uploadFile" class="file-uploader__button" :disabled="!selectedFile">Upload</button>
  </div>
</template>

<style>
.file-uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.file-uploader__label {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-uploader__label:hover {
  background-color: #f5f5f5;
}

.file-uploader__label span {
  font-size: 1rem;
  font-weight: bold;
}

.file-uploader__input {
  display: none;
}

.file-preview {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
}

.file-preview__image {
  max-width: 100%;
  max-height: 20rem;
  object-fit: contain;
}

.file-uploader__button {
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #4caf50;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-uploader__button:hover:enabled {
  background-color: #3e8e41;
}

.file-uploader__button:disabled {
  opacity: 0.5;
  cursor: default;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: null,
      selectedFileUrl: null
    };
  },
  methods: {
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