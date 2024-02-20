<template>
    <div>
      <h2>Registro</h2>
      <form @submit.prevent="registerUser" class="register-form">
        <label for="email">Correo:</label>
        <input type="email" v-model="newUser.email" required>
        <label for="password">Contraseña:</label>
        <input type="password" v-model="newUser.password" required>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const users = ref([
    { email: 'usuario1@example.com', password: 'password123' },
    { email: 'usuario2@example.com', password: 'password456' }
  ]);
  
  const newUser = ref({ email: '', password: '' });
  
  const registerUser = () => {
    const existingUser = users.value.find(user => user.email === newUser.value.email);
    if (existingUser) {
      alert('Este correo ya está registrado');
    } else {
      users.value.push({ ...newUser.value });
      alert('Registro exitoso');
      newUser.value.email = ''; 
      newUser.value.password = ''; 
    }
  };
  </script>
  
  <style scoped>
  .register-form {
    max-width: 300px;
    margin: 0 auto;
  }
  .register-form label {
    display: block;
    margin-bottom: 0.5rem;
  }
  .register-form input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  .register-form button {
    padding: 0.5rem 1rem;
    background-color: #28a745;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  .register-form button:hover {
    background-color: #218838;
  }
  </style>
  