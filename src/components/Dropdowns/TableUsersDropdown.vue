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
        </a>
        <a
          href="javascript:void(0);" @click.prevent="VerifyUser(userid)"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Verif
        </a>
      </div>
    </div>
  </template>
  <script>

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
        
       console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

        }, DeleteUser(userid)
        {
          
            axios.delete('http://localhost:9090/user/'+userid)
    .then(response => {

       console.log(response);
      

  // emit custom event with refreshTable payload
  this.$emit('child-event', this.userid);
    })
    .catch(error => {
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
  