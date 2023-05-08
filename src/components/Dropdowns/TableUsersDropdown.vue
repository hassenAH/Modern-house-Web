<template>
    <div>
      <a
        class="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref="btnDropdownRef"
        v-on:click="toggleDropdown($event)"
      >
        <i class="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref="popoverDropdownRef"
        class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        v-bind:class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow,
        }"
      >
        
        <a
          href="javascript:void(0);" @click.prevent="DeleteUser(userid)"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
        
        Delete
        <i class="fas fa-trash-alt mr-2 py-2 px-4 font-normal text-sm text-blueGray-400"></i>
        </a>
        <a
          href="javascript:void(0);" @click.prevent="VerifyUser(userid)"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
        
          Verif 
          <i class="fas fa-check-circle  mr-2 py-2 px-4 font-normal text-sm text-blueGray-400"></i>

        </a>
      </div>
    </div>
  </template>
  <script>
import Swall from 'sweetalert2'

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
import { createPopper } from "@popperjs/core";
  import axios from 'axios';
  export default {
    data() {
      return {
        dropdownPopoverShow: false,
        refreshTable:false
      };
    },
    methods: {
        VerifyUser(userid)
        {
            axios.get('http://localhost:9090/user/verify/'+userid)
    .then(response => {
      Toast.fire ('User  verifed') 
      setTimeout(() => {  this.refresh = !this.refresh; }, 1000)
       console.log(response);
    })
    .catch(error => {
      console.log(error);
      Toast.fire ('Opps !! Try Again') 
    });

          
          
        }, DeleteUser(userid)
        {
          
            axios.delete('http://localhost:9090/user/'+userid)
    .then(response => {
      Toast.fire ('User  deleted') 
      setTimeout(() => {  this.refresh = !this.refresh; }, 1000)
       console.log(response);
      

  // emit custom event with refreshTable payload
  this.$emit('child-event', this.userid);
    })
    .catch(error => {
      Toast.fire ('Opps !! Try Again') 
      console.log(error);
    });

        },
      toggleDropdown: function (event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
          this.dropdownPopoverShow = false;
        } else {
          this.dropdownPopoverShow = true;
          createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
            placement: "bottom-start",
          });
        }
      },
    },
    props: {
      userid:String,
    },
  };
  </script>
  