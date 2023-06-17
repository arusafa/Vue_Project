<template>
  <h1>My Shopping Cart</h1>
  <!--using v-if statement if theres no item-->
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :products="cartItems" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
    <h3>There are no items in your cart</h3>
  </div>
</template>

<script>

import ShoppingCartList from '../components/ShoppingCartList.vue';
import { cartItems } from '../temp-data';


export default {
  name: 'ShoppingCartPage',
  components: {
    ShoppingCartList,
  },
  data() {
    return {
      cartItems,
    }
  }
}
</script>