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
          href="javascript:void(0);" @click.prevent="DeletePromo(id)"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
        Delete
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
       

      DeletePromo(id)
        {
          
            axios.delete('http://localhost:9090/Promo/delete/'+id)
    .then(response => {

       console.log(response);
      

  // emit custom event with refreshTable payload
  this.$emit('child-event', this.id);
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
        id:String,
    },
  };
  </script>
  