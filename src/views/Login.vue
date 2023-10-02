<template>
  <div class="login-container">
    <h2>Admin Login</h2>
    <form @submit.prevent="login" class="login-form">
      <label v-if="!isLogin" for="username">Username:</label>
      <input v-if="!isLogin" type="text" id="username" v-model.trim="username" required />
      <label v-if="!isLogin" for="password">Password:</label>
      <input v-if="!isLogin" type="password" id="password" v-model.trim="password" required />
      <!-- Show the login button if isLogin is false -->
      <button v-if="!isLogin" type="submit">Login</button>
      
      <!-- Show the logout button if isLogin is true -->
      <button v-else type="button" @click="logout">Logout</button>
    </form>
    <router-link to="/register" class="register-link">Register</router-link>
  </div>
  <div class="status-message">{{ loginstatus }}</div>
</template>

<script>
import { ref, computed } from 'vue'; // Import ref and computed from Vue
import { isLogin, setIsLogin } from './auth/store.js';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const loginstatus = ref('');

    const login = () => {
      const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials'));

      if (adminCredentials && adminCredentials.username === username.value && adminCredentials.password === password.value) {
        setIsLogin(true);
        loginstatus.value = "Login successful!";
      } else {
        loginstatus.value = "Login failed!";
      }
    };

    const logout = () => {
      setIsLogin(false);
      loginstatus.value = "Logout successful!";
    };

    // Use computed property to access isLogin from the store
    const isLoginComputed = computed(() => isLogin.value);

    return {
      username,
      password,
      loginstatus,
      login,
      logout,
      isLogin: isLoginComputed,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

.register-link {
  text-align: center;
  margin-top: 10px;
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
  transition: color 0.3s, box-shadow 0.3s; /* Add box-shadow to the transition */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add box-shadow here */
}

.register-link:hover {
  color: #2980b9;
}
.status-message {
  text-align: center; /* Center text horizontally */
  margin-top: 10px; /* Add margin for spacing */
}
</style>
