<template>
  <div>
    <h1>Contáctenos</h1>
    <p>Para consultas, por favor llene el siguiente formulario:</p>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí se puede añadir la lógica para enviar el formulario
      alert('Formulario enviado!');
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
label {
  margin-top: 10px;
}
button {
  margin-top: 20px;
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
