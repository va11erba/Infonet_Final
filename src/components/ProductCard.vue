<template>
  <div class="card">
    <h3>{{ product.nombre }}</h3>
    <ul>
      <li v-for="caracteristica in product.caracteristicas" :key="caracteristica">{{ caracteristica }}</li>
    </ul>
    <p>Precio Normal: {{ product.precio_normal }}</p>
    <p>Precio Infonet: {{ product.precio_infonet }}</p>
    <button v-if="showAddToCartButton" @click="$emit('add-to-cart', product)">Agregar al Carrito</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    showAddToCartButton: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
}
button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #555;
}
</style>
