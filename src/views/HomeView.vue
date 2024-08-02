<template>
  <div class="home">
    <header class="jumbotron text-center bg-light">
      <h1 class="display-4">BIENVENIDOS A INFONET</h1>
      <p class="lead">LOS MEJORES PRODUCTOS PARA TI</p>
    </header>
    <section class="container my-5">
      <h2 class="text-center">TE OFRECEMOS LOS MEJORES PLANES</h2>
      <div class="row">
        <div class="col-md-4" v-for="offer in offers" :key="offer.titulo">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ offer.titulo }}</h5>
              <p class="card-text">{{ offer.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="feedback-section bg-light py-5">
      <div class="container">
        <h2 class="text-center">Ultimos Feedbacks</h2>
        <div class="row">
          <div class="col-md-3" v-for="comment in comments" :key="comment.nombre">
            <div class="card mb-4 shadow-sm text-center">
              <div class="card-body">
                <p><strong>{{ comment.nombre }}</strong></p>
                <p>{{ comment.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import homeData from '../data/home.json';

export default {
  data() {
    return {
      offers: [], // Para almacenar las ofertas
      comments: [] // Para almacenar los comentarios
    };
  },
  mounted() {
    this.offers = homeData.planes;
    this.comments = homeData.feedback;
  }
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
}

.jumbotron {
  background: url('@/assets/background.png') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 4rem 2rem;
}

.feedback-section {
  background-color: #f9f9f9;
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
</style>
