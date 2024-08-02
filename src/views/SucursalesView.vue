<template>
  <div>
    <h1>Sucursales</h1>
    <ul>
      <li v-for="branch in branches" :key="branch.id">
        <h2>{{ branch.nombre }}</h2>
        <p>Dirección: {{ branch.direccion }}</p>
        <p>Teléfono: {{ branch.telefono }}</p>
        <p>Horario: {{ branch.horario }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      branches: [
        {
          id: 1,
          nombre: 'Sucursal Centro',
          direccion: 'Av. Libertador 1234, Santiago',
          telefono: '+56 2 1234 5678',
          horario: 'Lunes a Viernes, 9:00 - 18:00'
        },
        {
          id: 2,
          nombre: 'Sucursal Norte',
          direccion: 'Av. El Salto 5678, Santiago',
          telefono: '+56 2 9876 5432',
          horario: 'Lunes a Viernes, 9:00 - 18:00'
        },
        {
          id: 3,
          nombre: 'Sucursal Sur',
          direccion: 'Av. Los Andes 4321, Santiago',
          telefono: '+56 2 5678 1234',
          horario: 'Lunes a Viernes, 9:00 - 18:00'
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
}
</style>
