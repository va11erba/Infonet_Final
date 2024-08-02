<template>
  <div class="venta" style="background: url('@/assets/background.png') no-repeat center center; background-size: cover;">
    <h1 class="text-center my-4">Venta</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ product.nombre }}</h5>
              <ul class="list-unstyled">
                <li v-for="caracteristica in product.caracteristicas" :key="caracteristica">• {{ caracteristica }}</li>
              </ul>
              <p class="card-text">Precio Normal: {{ formatCurrency(product.precio_normal) }}</p>
              <p class="card-text">Precio Infonet: {{ formatCurrency(product.precio_infonet) }}</p>
              <button class="btn btn-primary" @click="addToCart(product)">Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-section mt-4">
        <CartApp :cart="cart" />
      </div>
    </div>
  </div>
</template>

<script>
import CartApp from '../components/CartApp.vue';
import productsData from '../data/productos.json';

export default {
  components: { CartApp },
  data() {
    return {
      products: [],
      cart: []
    };
  },
  mounted() {
    this.products = productsData.productos;
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
    }
  }
};
</script>

<style scoped>
.venta {
  font-family: Arial, sans-serif;
  padding-bottom: 20px;
}
.card {
  border: none;
  border-radius: 10px;
}
.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.card-text {
  font-size: 1rem;
}
.card-body {
  padding: 1.5rem;
}
.cart-section {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
}
</style>
