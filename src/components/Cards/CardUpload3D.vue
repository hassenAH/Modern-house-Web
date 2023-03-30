
<template>
   <div class="MyContent">
  <h1>Click on chooser to choose image</h1>
  <div style="width:400px;margin: 0 auto">
    <vue-image-chooser name="image-chooser" @change="uploadFile" :progress="progress" :error="error"/>
  </div>
</div>
  </template>
  <script>
 
 
  
  import axios from "axios";
 
  export default {
    
  data() {
    return {
        
      progress: null,
      error: null,
    }
  },
  methods: {
    uploadFile(file) {
      this.progress = 0;
      let formData = new FormData();
      formData.append('image', file);
      var config = {
        onUploadProgress: progressEvent => {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )
          this.progress = percentCompleted
        }
      }
      try {
         axios.post(
          '/path/to/server/',
          formData,
          config
        )
      } catch (e) {
        this.error = 'Error has occured'
      }
    }
  }
}
  </script>
  