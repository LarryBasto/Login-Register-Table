<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login" class="login-form">
        <label for="email">Correo:</label>
        <input type="email" v-model="email" required>
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" required>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const correctEmail = 'usuario@example.com';
  const correctPassword = 'password123';
  
  const login = () => {
    if (email.value === correctEmail && password.value === correctPassword) {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 300px;
    margin: 0 auto;
  }
  .login-form label {
    display: block;
    margin-bottom: 0.5rem;
  }
  .login-form input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  .login-form button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  .login-form button:hover {
    background-color: #0056b3;
  }
  </style>
  