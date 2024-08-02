<template>
  <div class="confirmacion-page" style="background: url('@/assets/background.png') no-repeat center center; background-size: cover;">
    <div class="container py-5">
      <div class="card confirmation-card mx-auto">
        <div class="card-body text-center">
          <h1 class="display-4">Confirmación</h1>
          <p class="lead">Orden #{{ orderDetails.orderNumber }}</p>
          <p class="status">Status: <strong>{{ orderDetails.status }}</strong></p>
          <router-link to="/" class="btn btn-primary mt-3">Regresar al Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderDetails from '../data/ordercheckresp.json';

export default {
  data() {
    return {
      orderDetails: {}
    };
  },
  mounted() {
    this.orderDetails = orderDetails || {};
  }
};
</script>

<style scoped>
.confirmacion-page {
  font-family: Arial, sans-serif;
}

.container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.confirmation-card {
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.confirmation-card .card-body {
  padding: 40px;
}

.display-4 {
  font-size: 2.5rem;
}

.status {
  font-size: 1.25rem;
  margin-top: 10px;
}
</style>
