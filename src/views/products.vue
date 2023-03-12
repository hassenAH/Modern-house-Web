<template>
  <div class="wrapper">
    <h1>Products</h1>
    <ul class="cart-list">
      <li class="flex-col cart-list__item" v-for="(product, index) in products" :key="index">
        <img :src="'http://localhost:9090/img/' + product.image" alt="Product Image" class="thumbnail">
        <div class="flex-col cart-list__item__details">
          <div>
            <p>{{ product.name }}</p>
          </div>
          <p>${{ product.price }}</p>
          <button
              @click="removeFromCart(item.id)"
              class="btn cart-list__btn-remove">
            Add to Cart
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],

    };
  },
  methods: {
    getProductNames() {
      axios.get('http://localhost:9090/produit/getall')
          .then(response => {
            this.products = response.data.map(p => ({
              name: p.productname,
              price: p.price,
              image:p.image
            }));
          })
          .catch(error => {
            console.log(error);
          });
    }

  },
  mounted() {
    this.getProductNames();
  },
};
</script>

<style>
.cart-list {
  width: 70%;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__item__details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-list__btn-remove {
  margin-top: .5rem;
  &:hover {
    color: red;
  }
}
.thumbnail {
  max-width: 50px;
  margin-top: .5rem;
}
</style>