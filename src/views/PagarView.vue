<template>
  <div class="checkout-page" style="background: url('@/assets/background.png') no-repeat center center; background-size: cover;">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-8">
          <CheckoutForm />
        </div>
        <div class="col-md-4">
          <div class="cart-summary">
            <CartApp :cart="cart" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutForm from '../components/CheckoutForm.vue';
import CartApp from '../components/CartApp.vue';

export default {
  components: { CheckoutForm, CartApp },
  data() {
    return {
      cart: [] // Aquí deberías obtener el carrito real
    };
  }
};
</script>

<style scoped>
.checkout-page {
  font-family: Arial, sans-serif;
}

.container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cart-summary {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
