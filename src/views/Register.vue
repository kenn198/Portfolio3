<template>
  <div class="login-container">
    <h2>Admin Registration</h2>
    <form class="login-form" @submit.prevent="register">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model.trim="newUsername" required />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model.trim="newPassword" required />
      <button type="submit">Register</button>
    </form>
    <router-link to="/project/3" class="register-link">Login</router-link>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      newUsername: '',
      newPassword: '',
    };
  },
  methods: {
    register() {
      // Store admin credentials in localStorage
      const adminCredentials = {
        username: this.newUsername,
        password: this.newPassword,
      };

      localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));
      alert('Registration successful!');
      // Redirect to login page 
      this.$router.push('/project/3');
    },
  },
};
</script>

<style scoped>

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

button[type="submit"] {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
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
</style>
