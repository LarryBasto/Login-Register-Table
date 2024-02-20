import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Registro from '../views/Registro.vue';
import TablaDatos from '../views/TablaDatos.vue';

const routes = [
  { path: '/login', component: Login }, 
  { path: '/registro', component: Registro }, 
  { path: '/tabla-datos', component: TablaDatos } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
