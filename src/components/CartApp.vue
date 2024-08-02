<template>
  <div class="cart">
    <h2>Carrito de Compras</h2>
    <ul class="list-group mb-3">
      <li v-for="item in cart" :key="item.id" class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">{{ item.nombre }}</h6>
          <small class="text-muted">{{ item.caracteristicas.join(', ') }}</small>
        </div>
        <span class="text-muted">{{ formatCurrency(item.precio_infonet) }}</span>
      </li>
    </ul>
    <div class="cart-summary">
      <p>Total: <strong>{{ formatCurrency(total) }}</strong></p>
      <p>Descuento: <strong>{{ formatCurrency(discount) }}</strong></p>
      <p>Monto Final: <strong>{{ formatCurrency(finalAmount) }}</strong></p>
    </div>
    <router-link to="/pagar"><button class="btn btn-primary btn-block">Pagar</button></router-link>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.precio_infonet, 0);
    },
    discount() {
      return this.total >= 1000000 ? this.total * 0.09 : this.total * 0.03;
    },
    finalAmount() {
      return Math.round(this.total - this.discount);
    }
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
    }
  }
};
</script>

<style scoped>
.cart {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.cart-summary p {
  margin: 0;
  font-size: 1.1em;
}
.btn-block {
  width: 100%;
}
</style>
