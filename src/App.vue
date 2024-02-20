<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Login from '../views/Login.vue' 
import Registro from '../views/Registro.vue' 
import TablaDatos from '../views/TablaDatos.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink> 
        <RouterLink to="/registro">Registro</RouterLink> 
        <RouterLink to="/tabla-datos">Tabla de Datos</RouterLink> 
      </nav>
    </div>
  </header>

  <RouterView />
</template>
