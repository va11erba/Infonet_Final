<template>
  <div class="checkout">
    <h2>Pagar</h2>
    <form @submit.prevent="submitOrder" class="form-checkout">
      <h3>Detalles del despacho</h3>
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input id="name" v-model="name" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="repeatEmail">Repetir Email:</label>
        <input id="repeatEmail" type="email" v-model="repeatEmail" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="phone">Teléfono:</label>
        <input id="phone" v-model="phone" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="address">Dirección:</label>
        <input id="address" v-model="address" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="commune">Comuna:</label>
        <input id="commune" v-model="commune" class="form-control" required>
      </div>
      <h3>Forma de Pago</h3>
      <div class="form-group">
        <label for="paymentMethod">Método de Pago:</label>
        <select id="paymentMethod" v-model="paymentMethod" class="form-control" required>
          <option value="transferencia">Transferencia Bancaria</option>
          <option value="servipag">Servipag</option>
          <option value="webpay">Webpay</option>
          <option value="flow">Flow</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success btn-block">Confirmar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      repeatEmail: '',
      phone: '',
      address: '',
      commune: '',
      paymentMethod: 'transferencia'
    };
  },
  methods: {
    submitOrder() {
      if (this.email !== this.repeatEmail) {
        alert('Los correos electrónicos no coinciden.');
        return;
      }
      // Simula el envío del pedido
      this.$router.push('/confirmacion');
    }
  }
};
</script>

<style scoped>
.checkout {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-checkout {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.btn-block {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>
