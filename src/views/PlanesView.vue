<template>
  <div class="planes-page" style="background: url('@/assets/background.png') no-repeat center center; background-size: cover;">
    <div class="container py-5">
      <div class="card planes-card mx-auto">
        <div class="card-body text-center">
          <h1 class="display-4">Planes</h1>
          <p class="lead">Para ver nuestros planes disponibles, visita el sitio de inicio</p>
          <router-link to="/" class="btn btn-primary mt-3">Ir al Inicio</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanesView'
};
</script>

<style scoped>
.planes-page {
  font-family: Arial, sans-serif;
}

.container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.planes-card {
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.planes-card .card-body {
  padding: 40px;
}

.display-4 {
  font-size: 2.5rem;
}

.lead {
  font-size: 1.25rem;
  margin-top: 10px;
}
</style>
