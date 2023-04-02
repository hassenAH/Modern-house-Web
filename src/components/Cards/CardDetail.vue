<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              class="font-semibold text-lg"
              :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
            >
              Card Tables
            </h3>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto" >
        <!-- Projects table -->
        <div data-v-fb8b6cda="" class="checkout-box">
<ul data-v-fb8b6cda="" class="checkout-list">
<span data-v-fb8b6cda=""><li data-v-fb8b6cda="" class="checkout-product">
<img data-v-fb8b6cda="" src="https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png" alt="" class="product-image"> <h3 data-v-fb8b6cda="" class="product-name">Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB</h3> 
<span data-v-fb8b6cda="" class="product-price">R$ 2259,00 </span> 
<button data-v-fb8b6cda="" class="product-remove">X</button>
</li>
</span>
</ul> 
<!----> <h3 data-v-fb8b6cda="" class="total">
    Total: R$ 2259, 00
  </h3
></div>
      </div>
    </div>
  </template>
  <script>
  
  import axios from 'axios';

  export default {
    name: 'DetailCommande',
  data() {
    return {
      commande: null,
    };
  },
  async mounted() {
    const id = this.$route.body.id;
    const response = await axios.post(`http://localhost:9090/commande/getbyidcard/${id}`);
    this.commande = response.data;
  },
    props: {
      color: {
        default: "light",
        validator: function (value) {
          // The value must match one of these strings
          return ["light", "dark"].indexOf(value) !== -1;
        },
      },
    },
    
  };
  
  </script>

  