import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import VentaView from '../views/VentaView.vue';
import PagarView from '../views/PagarView.vue';
import ConfirmacionView from '../views/ConfirmacionView.vue';
import PlanesView from '../views/PlanesView.vue';
import PrepagoView from '../views/PrepagoView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/venta', name: 'venta', component: VentaView },
  { path: '/pagar', name: 'pagar', component: PagarView },
  { path: '/confirmacion', name: 'confirmacion', component: ConfirmacionView },
  { path: '/planes', name: 'planes', component: PlanesView },
  { path: '/prepago', name: 'prepago', component: PrepagoView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
