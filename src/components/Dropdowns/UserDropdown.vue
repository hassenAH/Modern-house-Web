<template>
  <div>
    <a
      class="text-blueGray-500 block"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="items-center flex">
        <span
          class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
        >
          <img
            alt="..."
            class="w-full rounded-full align-middle border-none shadow-lg"
            :src="`http://localhost:9090/img/${this.user.Image}` "
          />
        </span>
      </div>
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
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
      <p
                  class="font-semibold mr-2 t text-lg text-blueGray-400"
                >
                {{user.last_name}}  {{user.first_name}} 
    </p>
      </a>
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
     
                  <i
                    class="fas fa-briefcase mr-2 text-lg text-blueGray-400"
                  ></i>
                  {{user.company_name}}
               
      </a>
    
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <button class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  v-on:click="logout">
        log out
    </button>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";



export default {
  data() {
    return {
      dropdownPopoverShow: false,
      user:null ,
    };
  },created() {
    // Retrieve the user's data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
  methods: {
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
    logout() {
      // Remove the "user" item from localStorage
localStorage.removeItem('user');

// Clear the user data in the Vue.js component
this.user = null;
this.$router.push('/auth/login')
    }
  },
};
</script>
