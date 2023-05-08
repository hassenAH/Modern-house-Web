<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            
                 <label> <img
                  v-if="item.imageUrl" :src="item.imageUrl"
                      
                       class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                     />
                     <input type="file" accept="image/*" @change="uploadImage"  id="file-input"  style="display:none" ></label>  
            
                 

          </div>
          
        </div>
        <div class="w-full px-4 text-center mt-20">
          <div class="flex justify-center py-4 lg:pt-4 pt-8">
            <div class="mr-4 p-3 text-center">
              
            
            </div>
            
            
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >
                  {{user.first_name}} {{user.last_name}}
                </h3>
        <div
          class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
        >
          <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          
        </div>
        <div class="mb-2 text-blueGray-600 mt-10">
                  <i
                    class="fas fa-briefcase mr-2 text-lg text-blueGray-400"
                  ></i>
                  {{user.company_name}}
                </div>
        
      </div>
      <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
             
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      item:{
          //...
          image : null,
          imageUrl: null
      },
      user:null,
    };
  },methods: {
    onChange(e) {
      const file = e.target.files[0]
      this.image = file
      this.item.imageUrl = URL.createObjectURL(file)
      this.user.image= this.item.imageUrl
      
    },

uploadImage(e) {
  const file = e.target.files[0]
      this.image = file
      this.item.imageUrl = URL.createObjectURL(file)
      this.user.image= this.item.imageUrl
      
  const url = 'http://localhost:9090/user/'+this.user._id; 

  let data = new FormData();
 
  data.append('image', file); 

  let config = {
    header : {
      'Content-Type' : 'image/png'
    }
  }

  axios.post(
    url, 
    data,
    config
  ).then(
    response => {
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log('image upload response > ', response)
    }
  )
}
},
  created() {
    // Retrieve the user's data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      this.item.imageUrl= 'http://localhost:9090/img/'+this.user.Image;
    }
  }
};
</script>
