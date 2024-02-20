<template>
    <div>
      <h2>Tabla de Datos</h2>
      <table class="data-table">
        <thead>
          <tr>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>
              <button @click="editUser(user)" class="edit-button">Editar</button>
              <button @click="deleteUser(index)" class="delete-button">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="isEditing" class="edit-dialog">
        <h3>Editar Usuario</h3>
        <form @submit.prevent="saveEdit">
          <label for="edit-email" class="edit-label">Correo:</label>
          <input type="email" v-model="editedUser.email" id="edit-email" required>
          <label for="edit-password" class="edit-label">Contraseña:</label>
          <input type="password" v-model="editedUser.password" id="edit-password" required>
          <button type="submit">Guardar</button>
        </form>
        <button @click="cancelEdit">Cancelar</button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const users = ref([
    { email: 'usuario1@example.com', password: 'password123' },
    { email: 'usuario2@example.com', password: 'password456' }
  ]);
  
  const editedUser = ref({ email: '', password: '' });
  let editedIndex = -1;
  const isEditing = ref(false);
  
  const editUser = (user: any) => {
    editedUser.value = { ...user };
    editedIndex = users.value.indexOf(user);
    isEditing.value = true;
  };
  
  const saveEdit = () => {
    users.value.splice(editedIndex, 1, { ...editedUser.value });
    isEditing.value = false;
  };
  
  const cancelEdit = () => {
    isEditing.value = false;
  };
  
  const deleteUser = (index: number) => {
    users.value.splice(index, 1);
  };
  </script>
  
  <style>
  .data-table {
    width: 100%;
    border-collapse: collapse;
  }
  .data-table th, .data-table td {
    border: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: left;
  }
  .data-table th {
    background-color: #007bff;
    color: #fff;
  }
  .data-table td {
    background-color: #f8f9fa;
    color: #212529;
  }
  
  .edit-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 2rem;
    border: 1px solid #ccc;
  }
  .edit-dialog h3 {
    margin-top: 0;
    color: #212529; 
  }
  .edit-dialog .edit-label {
    color: #212529;
    display: block;
    margin-bottom: 0.5rem;
  }
  .edit-dialog input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  .edit-dialog button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  .edit-dialog button:hover {
    background-color: #0056b3;
  }
  </style>
  