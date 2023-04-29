<template>
    <div >
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
        <router-link  :to="'/Supplier/detailcommande/' + commandeid"
                v-slot="{ href ,navigate }"
              >
        <a
        :href="href" @click="navigate"
          
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Details
        </a>
    </router-link>
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
      };
    },

    methods: {
        details(commandeid)
        {
            axios.post('http://localhost:9090/commande/getbyidcard/'+commandeid)
    .then(response => {

       console.log(response);
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
    props : {
        commandeid:String,
        etat2:String,
    }
  };
  </script>
  