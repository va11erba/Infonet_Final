<template>
  <div class="prepago-page" style="background: url('@/assets/background.png') no-repeat center center; background-size: cover;">
    <div class="container py-5">
      <div class="card prepago-card mx-auto">
        <div class="card-body text-center">
          <h1 class="display-4">Prepago</h1>
          <p class="lead">Pronto vendremos con nuevos planes prepago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrepagoView'
};
</script>

<style scoped>
.prepago-page {
  font-family: Arial, sans-serif;
}

.container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.prepago-card {
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.prepago-card .card-body {
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
