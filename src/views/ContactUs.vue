<template>
  <div class="about-us-form">
    <h2>About Us Feedback</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>

      <div class="form-group">
        <label for="feedback">Feedback:</label>
        <textarea id="feedback" v-model="formData.feedback" required></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
    <div v-if="statusMessage" class="status-message">{{ statusMessage }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  feedback: ''
});

const statusMessage = ref('');

const handleSubmit = () => {

  // Handle the form submission logic here
  // For demonstration purposes, we'll just log the form data
  console.log(formData.value);

  // Reset the form
  formData.value = {
    name: '',
    email: '',
    feedback: ''
  };

  // Set a success message
  statusMessage.value = 'Form submitted successfully!';
};

</script>

<style scoped>
.about-us-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.status-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
}
</style>
