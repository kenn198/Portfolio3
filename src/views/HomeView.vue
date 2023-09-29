<template>
  <section class="portfolio-home">
    <header class="portfolio-header">
      <h1>Ken Tay</h1>
      <p>Web Developer & Designer</p>
    </header>

    <section class="portfolio-intro">
      <p>
        Hello! I'm Ken, a passionate web developer with over a years worth of experience. I love creating responsive and user-friendly websites. Check out my projects below!
      </p>
    </section>

    <section class="portfolio-projects">
      <h2>Click my projects to find out more</h2>
      <div class="projects-grid">
          <li v-for="project in projects" :key="project.id" class="project-card">
            <router-link :to="'/project/' + project.id ">
              <div class="project-content">
                <h3>{{ project.name }}</h3>
                <img :src="project.image" :alt="project.name" />
                <p>{{ project.description }}</p>
              </div>
            </router-link>
          </li>
      </div>
    </section>

    <footer class="portfolio-footer">
      <p>Thank you for visiting! Let's <a href="taykenneth198@gmail.com">connect</a>.</p>
    </footer>
  </section>
</template>


<script setup>
import { ref } from 'vue';

import projectImage1 from '../assets/images/diego-ph-fIq0tET6llw-unsplash.jpg';
import Fitness from '../assets/logo2.png';
import vue from '../assets/logo.svg';


const projects = ref([
  {
    id: 1,
    name: 'Vue Concepts',
    description: 'The goal was to showcase an implementation of what vue has to offer.',
    image: vue
  },
  {
    id: 2,
    name: 'Fitness website',
    description: 'Created a checklist of exercises to do, with google maps api to find the nearest gym and a contact system that links to mongodB.',
    image: Fitness
  },
  // ... add more projects as needed
]);


</script>

<style scoped>
.portfolio-home {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 50px;
}

.portfolio-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.portfolio-intro {
  text-align: center;
  margin-bottom: 50px;
}

.portfolio-projects {
  margin-bottom: 50px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  border: 1px solid #000000;
  background-color: lightblue;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out; /* Add a smooth transform transition */
}

.project-card img {
  width: 100%;
  height: auto;
}

.project-content {
  padding: 20px;
  text-align: center;
}

.project-card h3 {
  font-size: 1.2em; /* Increase font size */
  margin-bottom: 10px;
  transition: color 0.3s; /* Add a smooth color transition */
}

/* Hover effect styles */
.project-card:hover {
  transform: scale(1.05); /* Scale up the card on hover */
}

.project-card:hover h3 {
  color: #3498db; /* Change text color on hover */
}

.portfolio-footer {
  text-align: center;
}
.portfolio-footer {
  text-align: center;
}
</style>